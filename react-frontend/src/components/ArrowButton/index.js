import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

import css from './index.scss'
import leftArrow from 'src/assets/leftArrow.png'

const cx = classnames.bind(css)
const moduleName = 'ArrowButton'

const ArrowButton = ({ onClick, direction = 'left', disabled }) => {
  if(disabled) return null
  return (
    <button
      className={cx(`${moduleName}`)}
      onClick={onClick}
      disabled={disabled}
    >
        <img
          className={cx(`${moduleName}-img-${direction}`)}
          src={leftArrow}
          alt={'arrow-btn'}
        />
    </button>
  )
}

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string,
  disabled: PropTypes.bool
}

export default ArrowButton
