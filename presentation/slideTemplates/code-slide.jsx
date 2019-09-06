// Import React
import React from 'react'
import PropTypes from 'prop-types'
import useMediaQuery from 'use-media-query-hook'

// Import Spectacle Core tags
import { Heading, CodePane, Text } from './components'

import asSlide from './as-slide.jsx'
import { headingColor, textColor } from './utilities.jsx'
import FullScreen from './full-screen.jsx'

const imageStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)'
}

const CodeSlide = ({
  title,
  language,
  source,
  size,
  fit,
  caps,
  inverted,
  text,
  children,
  zoom
}) => {
  const codeText = require(`!!raw-loader!../../assets/code/${source}`)
  const smallScreen = useMediaQuery('(max-width: 1900px)')
  if (smallScreen) {
    zoom = zoom * 0.75
  }
  const thisCodeStyle = {
    ...imageStyle,
    zoom: zoom,
    display: 'block',
    margin: 'auto',
    height: 'auto',
    width: 'auto',
    maxWidth: '100%',
    top: '0%',
    maxHeight: '100%'
  }
  return (
    <FullScreen column>
      {!!title && (
        <div>
          <Heading
            size={size}
            fit={fit}
            caps={caps}
            textColor={headingColor(inverted)}
            style={{ marginBottom: '0.1em' }}>
            {title}
          </Heading>
        </div>
      )}
      <div
        style={{
          flex: 1,
          position: 'relative',
          width: '100%',
          justifyContent: 'stretch'
        }}>
        <CodePane
          style={thisCodeStyle}
          source={codeText}
          lang={language}
          theme="dark"
        />
      </div>
      {!!text && (
        <div>
          <Text textColor={textColor(inverted)} style={{ marginTop: '.5em' }}>
            {text}
          </Text>
        </div>
      )}
      {children}
    </FullScreen>
  )
}

CodeSlide.propTypes = {
  language: PropTypes.string.isRequired,
  caps: PropTypes.bool.isRequired,
  fit: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired,
  text: PropTypes.node,
  title: PropTypes.string,
  zoom: PropTypes.number.isRequired
}

CodeSlide.defaultProps = {
  language: 'javascript',
  inverted: false,
  size: 1,
  zoom: 2,
  fit: true,
  caps: true
}

export default asSlide(CodeSlide)
