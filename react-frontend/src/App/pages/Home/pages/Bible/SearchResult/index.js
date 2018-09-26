import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames/bind'

import { searchKeyword } from 'src/redux/search/actions'

import SearchBar from 'src/components/SearchBar'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'SearchResult'

class SearchResult extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      isStartSearch: false
    }
  }
  handleChangeValue = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({ isStartSearch: true })
  }

  handleSubmit = () => {
    this.props.searchKeyword(this.state.search)
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <SearchBar
          onChange={this.handleChangeValue}
          onSubmit={this.handleSubmit}
          path={'bible/results'}
          value={
            this.state.isStartSearch ? this.state.search : this.props.keyword
          }
        />
        <div className={cx(`${moduleName}-resultsBox`)}>results Box</div>
      </div>
    )
  }
}

export default connect(
  ({ search }) => ({ keyword: search.keyword }),
  {
    searchKeyword
  }
)(SearchResult)
