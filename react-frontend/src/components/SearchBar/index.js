import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames/bind'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'SearchBar'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: this.getIntialSearch()
    }
  }

  getIntialSearch = () => {
    const searchKeyword = this.getSearchedKeyword(document.URL)
    if (searchKeyword === 'undefined') {
      return ''
    } else {
      return searchKeyword
    }
  }

  getSearchedKeyword = urlPath => {
    const [, keyword] = urlPath.split('=')
    return decodeURI(keyword)
  }

  handleChange = e => this.setState({ search: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push(this.props.path + this.state.search)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-inputWrapper`)}>
          <input
            onChange={this.handleChange}
            placeholder="Search Bible"
            name="search"
            value={this.state.search}
          />
        </div>
        <button className={cx(`${moduleName}-icon`)}>
          <i className="fas fa-search" />
        </button>
      </form>
    )
  }
}

export default withRouter(SearchBar)
