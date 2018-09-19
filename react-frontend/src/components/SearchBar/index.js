import React from 'react'
import classnames from 'classnames/bind'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'SearchBar'

const SearchBar = (props) => {
  const { onChange } = props;
  
  return (
    <div className={cx(`${moduleName}`)}>
          <form>
            <div className={cx(`${moduleName}-inputWrapper`)}>
              <input
                onChange={onChange}
                placeholder="Search Bible"
                name="search"
              />
            </div>
            <div className={cx(`${moduleName}-icon`)}>
              <i className="fas fa-search" />
            </div>
          </form>
        </div>
  )
}

export default SearchBar