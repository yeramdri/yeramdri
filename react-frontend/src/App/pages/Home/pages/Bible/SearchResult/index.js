import React, { Component } from 'react'
import classnames from 'classnames/bind'

import SearchBar from 'src/components/SearchBar'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = "SearchResult"

class SearchResult extends Component {
  
  render() {
    return (
      <div>
        이건 서치result 컴포넌트야
        <SearchBar />
      </div>
    )
  }
}

export default SearchResult