import React, { Component } from 'react'
import classnames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'SearchBar'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: null
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onSubmit()
      this.setState({ redirect: { to: '/bible/results' } })
    }
  }

  render() {
    const { onChange, onSubmit, path = '/bible/results' } = this.props

    if (this.state.redirect) {
      return <Redirect {...this.state.redirect} />
    }

    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-inputWrapper`)}>
          <input
            onChange={onChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Search Bible"
            name="search"
          />
        </div>
        <Link to={path} onClick={onSubmit} className={cx(`${moduleName}-icon`)}>
          <i className="fas fa-search" />
        </Link>
      </div>
    )
  }
}

export default SearchBar
