import React from 'react'
import classnames from 'classnames/bind'
import { Link } from 'react-router-dom'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'SearchBar'

const SearchBar = props => {
  const { onChange, onSubmit, path = '/bible/results' } = props

  return (
    <div className={cx(`${moduleName}`)}>
      <form onSubmit={onSubmit}>
        <div className={cx(`${moduleName}-inputWrapper`)}>
          <input onChange={onChange} placeholder="Search Bible" name="search" />
        </div>
        <Link to={path} onClick={onSubmit} className={cx(`${moduleName}-icon`)}>
          <i className="fas fa-search" />
        </Link>
      </form>
    </div>
  )
}

export default SearchBar
