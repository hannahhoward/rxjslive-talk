import React from 'react'
import {
  string,
  arrayOf,
  shape,
  number,
  oneOfType,
  element,
  bool,
  object,
  func
} from 'prop-types'

import { Slide } from 'spectacle'
import CodeSlideTitle from 'spectacle-code-slide/lib/CodeSlideTitle'
import CodeSlideNote from 'spectacle-code-slide/lib/CodeSlideNote'
import CodeSlideImage from 'spectacle-code-slide/lib/CodeSlideImage'

import clamp from 'lodash.clamp'
import padStart from 'lodash.padstart'
import getHighlightedCodeLines from 'spectacle-code-slide/lib/getHighlightedCodeLines'
import calculateScrollCenter from 'spectacle-code-slide/lib/calculateScrollCenter'
import scrollToElement from 'spectacle-code-slide/lib/scrollToElement'
import getComputedCodeStyle from 'spectacle-code-slide/lib/getComputedCodeStyle'
import FullScreen from './full-screen.jsx'

function startOrEnd(index, loc) {
  if (index === loc[0]) {
    return 'start'
  } else if (index === loc[1]) {
    return 'end'
  } else {
    return null
  }
}

function calculateOpacity(index, loc) {
  return loc[0] <= index && loc[1] > index ? 1 : 0.2
}

function getLineNumber(index) {
  return '<span class="token comment">' + padStart(index + 1, 3) + '.</span> '
}

const computedCodeStyle = getComputedCodeStyle()
const defaultBgColor = computedCodeStyle.backgroundColor || '#122b45'
const defaultColor = computedCodeStyle.color || 'white'

const style = {
  position: 'relative',
  textAlign: 'center',
  overflow: 'hidden',
  color: defaultColor,
  height: '646px',
  margin: 0,
  padding: '40% 0',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word'
}

class CodeSlide extends React.Component {
  static propTypes = {
    lang: string.isRequired,
    source: string.isRequired,
    ranges: arrayOf(
      shape({
        loc: arrayOf(number).isRequired,
        title: oneOfType([element, string]),
        note: oneOfType([element, string])
      })
    ),
    showLineNumbers: bool
  }

  static defaultProps = {
    showLineNumbers: true
  }

  static contextTypes = {
    store: object.isRequired,
    updateNotes: func
  }

  state = {
    active: this.getStorageItem() || 0
  }

  componentWillMount() {
    this.updateNotes()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('storage', this.onStorage)
    window.addEventListener('resize', this.onResize)
    this.scrollActiveIntoView(true)

    window.requestAnimationFrame(() => {
      this.scrollActiveIntoView(true)
    })
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('storage', this.onStorage)
    window.removeEventListener('resize', this.onResize)
  }

  componentWillEnter(cb) {
    this.refs.slide.componentWillEnter(cb)
  }

  componentWillAppear(cb) {
    this.refs.slide.componentWillAppear(cb)
  }

  componentWillLeave(cb) {
    this.refs.slide.componentWillLeave(cb)
  }

  getStorageId() {
    return 'code-slide:' + this.props.slideIndex
  }

  getStorageItem() {
    return +window.localStorage.getItem(this.getStorageId())
  }

  setStorageItem(value) {
    return window.localStorage.setItem(this.getStorageId(), '' + value)
  }

  isSlideActive() {
    const slide = this.context.store.getState().route.slide
    return this.props.slideIndex === parseInt(slide)
  }

  goTo(active, skipLocalStorage) {
    this.setState({ active }, this.scrollActiveIntoView)
    this.updateNotes()

    if (!skipLocalStorage) {
      this.setStorageItem(active)
    }
  }

  scrollActiveIntoView = skipAnimation => {
    const { container, start, end } = this.refs
    const scrollTo = calculateScrollCenter(start, end, container)
    scrollToElement(container, 0, scrollTo, {
      duration: skipAnimation ? 1 : 1000
    })
  }

  onResize = () => {
    this.scrollActiveIntoView(true)
  }

  onKeyDown = e => {
    if (!this.isSlideActive()) {
      return
    }

    let prev = this.state.active
    let active = null

    if (e.which === 38) {
      active = prev - 1
    } else if (e.which === 40) {
      active = prev + 1
    }

    if (active !== null) {
      e.preventDefault()
      active = clamp(active, 0, this.props.ranges.length - 1)
      this.goTo(active)
    }
  }

  onStorage = e => {
    if (e.key === this.getStorageId()) {
      this.goTo(+e.newValue, true)
    }
  }

  updateNotes() {
    if (!this.isSlideActive() || !this.context.updateNotes) {
      return
    }

    const { ranges, notes } = this.props
    const { active } = this.state

    const range = ranges[active] || {}
    const rangeNotes = range.notes

    this.context.updateNotes(rangeNotes || notes)
  }

  render() {
    const {
      source,
      lang,
      ranges,
      color,
      bgColor,
      notes,
      showLineNumbers,
      ...rest
    } = this.props
    const { active } = this.state
    const code = require(`!!raw-loader!../../assets/code/${source}`)

    const range = ranges[active] || {}
    const loc = range.loc || []
    const slideBg = bgColor || defaultBgColor

    const newStyle = {
      ...style,
      color: color || style.color
    }

    const lines = getHighlightedCodeLines(code, lang).map((line, index) => {
      return (
        <div
          key={index}
          ref={startOrEnd(index, loc)}
          dangerouslySetInnerHTML={{
            __html: showLineNumbers ? getLineNumber(index) + line : line
          }}
          style={{ opacity: calculateOpacity(index, loc) }}
        />
      )
    })

    return (
      <Slide ref="slide" bgColor={slideBg} margin={1} {...rest}>
        <FullScreen>
          {range.title && <CodeSlideTitle>{range.title}</CodeSlideTitle>}

          <pre ref="container" style={newStyle}>
            <code style={{ display: 'inline-block', textAlign: 'left' }}>
              {lines}
            </code>
          </pre>

          {range.note && <CodeSlideNote>{range.note}</CodeSlideNote>}

          {range.image && <CodeSlideImage src={range.image} />}
        </FullScreen>
      </Slide>
    )
  }
}

export default CodeSlide
