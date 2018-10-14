import React, { Component } from 'react'
import classnames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import { loadKeywordContents } from 'src/redux/contents/actions'

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

  handleSubmit(e) {
    e.preventDefault()
    // 액션을 날린다. => redux의 state가 바뀌게 되므로, 화면이 갱실 될 것이다.
    this.props.loadKeywordContents('')

    // this.setState({redirect: {to: {'/bible-card/result?search=${this.props.value}'}} })
    // debugger
    // this.setState({
    //   redirect: { to: `/bible/result?search=${this.props.value}` }
    // })
    // axios
    //   .get(`http://localhost:6508/bible-card/result?search=${this.props.value}`)
    //   .then(res => {
    //     console.log(res)
    //   })
  }

  getSearchedKeyword = (path) => {
    const [, keyword] = path.split('=')
    return keyword
  }

  render() {
    const { value, onChange, onSubmit, path } = this.props

    if (this.state.redirect) {
      return <Redirect {...this.state.redirect} />
    }

    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.loadKeywordContents('')
      }} className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-inputWrapper`)}>
          <input
            onChange={onChange}
            placeholder="Search Bible"
            name="search"
            value={value}
          />
        </div>
        <Link to={path} onClick={() => {
          this.props.loadKeywordContents(this.getSearchedKeyword(path))
        }} className={cx(`${moduleName}-icon`)}>
          <i className="fas fa-search" />
        </Link>
        <input type="submit" />
        {/* <button></button> */}
      </form>
    )
  }
}

export default connect(({ contents }) => {
  return {
    keywordContents: contents.keywordContents
  }
},{
  loadKeywordContents
})(SearchBar)
