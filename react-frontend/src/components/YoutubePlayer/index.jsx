import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import css from './index.scss';

const cx = classnames.bind(css)
const moduleName = 'YoutubePlayer'

function YoutubePlayer({ title, src, controls, showInfo, modestBranding }) {
  return (
    <div className={cx(`${moduleName}`)}>
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${src}?controls=${controls}&showinfo=${showInfo}&modestbranding=${modestBranding}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  )
}

YoutubePlayer.defaultProps = {
  title: 'title',
  controls: 2,
  showInfo: 0,
  modestBranding: 1
}

YoutubePlayer.propTypes = {
  src: PropTypes.string.isRequired,
  controls: PropTypes.number,
  showInfo: PropTypes.number,
  modestBranding: PropTypes.number,
}

export default YoutubePlayer

