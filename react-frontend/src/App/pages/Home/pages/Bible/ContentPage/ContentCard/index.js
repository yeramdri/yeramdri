import React from 'react'
import classnames from 'classnames/bind'

import css from './index.scss'

const cx = classnames.bind(css)
const moduleName = 'ContentCard'

const ContentCard = ({ media }) => {
  return (
    <div className={cx(`${moduleName}`)}>
      {media.type === 'video' ? (
        <iframe
          className={cx(`${moduleName}-video`)}
          title="introduceVideo"
          src={media.url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <img src={media.url} alt="mediaImg" />
      )}
    </div>
  )
}

export default ContentCard
