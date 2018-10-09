import React from 'react'
import { Link } from 'react-router-dom'

import classnames from 'classnames/bind'
import css from './index.scss'

const cx = classnames.bind(css)
const moduleName = 'ContentCard'

const ContentCard = props => {
  const {
    content: { id, title, image }
  } = props
  return (
    <div className={cx(`${moduleName}-contentCard`)} onClick={()=> {alert(id)}}>
      <Link to={`/bible/${id}`}>
        <img src={image} alt="listImage" />
        <p>{title}</p>
      </Link>
    </div>
  )
}

export default ContentCard
