import React from 'react'
import PropTypes from 'prop-types'

import leftArrow from '../assets/leftArrow.png'

const buttonStyle = {
  borderRadius: '30px',
  width: '30px',
  height: '30px',
  padding: '0px',
  background: 'white',
  border: '1px #f6f6f6 solid'
}

const imgStyle = {
  width: '20px',
  height: '20px',
  position: 'relative',
  left: '0px',
  top: '1px'
}

const ArrowButton = ({ onClick, direction = 'left', disabled }) => {
  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      <img style={imgStyle} src={leftArrow} alt={'arrow-btn'} />
    </button>
  )
}

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string,
  disabled: PropTypes.bool
  // visible: PropTypes.bool
}

export default ArrowButton
