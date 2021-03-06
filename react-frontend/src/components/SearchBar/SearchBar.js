import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

import css from './SearchBar.scss'
const cx = classnames.bind(css)
const moduleName = 'SearchBar'

class SearchBar extends Component {
  constructor (props) {
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

  handleChange = e => this.setState({search: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push(this.props.path + this.state.search)
  }

  render() {
    const {placeholder} = this.props
    return (
      <form
        className={cx(`${moduleName}`)}
        onSubmit={this.handleSubmit}>
        <button className={cx(`${moduleName}-icon`)}>
          <i className="fas fa-search" />
        </button>
        <input
          onChange={this.handleChange}
          placeholder={placeholder}
          name="search"
          value={this.state.search}
        />
      </form>
    )
  }
}

SearchBar.propTypes = {
  path: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

SearchBar.defaultProps = {
  placeholder: 'Search'
}

export default withRouter(SearchBar)
