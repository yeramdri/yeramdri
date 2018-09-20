import React, { Component } from 'react'
import classnames from 'classnames/bind'

import SearchBar from 'src/components/SearchBar'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = "SearchResult"

class SearchResult extends Component {
  
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <SearchBar />
        <div className={cx(`${moduleName}-resultsBox`)}>
          results Box
        </div>
      </div>
    )
  }
}

export default SearchResult