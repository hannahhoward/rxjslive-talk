// Import React
import React from 'react'
import PropTypes from 'prop-types'

// Import Spectacle Core tags
import { Heading, Image, Text } from './components'

import asSlide from './as-slide.jsx'
import { headingColor, textColor } from './utilities.jsx'
import FullScreen from './full-screen.jsx'

const imageStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)'
}

const ImageSlide = ({
  title,
  image,
  size,
  fit,
  caps,
  inverted,
  text,
  children
}) => {
  const imageSrc = require(`../../assets/images/${image}`).replace('/', '')
  const thisImageStyle = {
    ...imageStyle,
    zoom: 8, // increase if you have very small images
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
        <Image style={thisImageStyle} src={imageSrc} />
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

ImageSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  fit: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired,
  text: PropTypes.node,
  title: PropTypes.node
}

ImageSlide.defaultProps = {
  inverted: false,
  size: 1,
  fit: true,
  caps: true
}

export default asSlide(ImageSlide)
