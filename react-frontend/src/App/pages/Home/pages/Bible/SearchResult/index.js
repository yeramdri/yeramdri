import React, { Component } from 'react'
import classnames from 'classnames/bind'
import { connect } from 'react-redux'

import SearchBar from 'src/components/SearchBar'
import { loadKeywordContents } from 'src/redux/contents/actions'

import css from './index.scss'
import ContentCard from '../components/ContentCard'
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

  componentDidUpdate() {
    console.log('update')
  }

  componentDidMount() {
    console.log('몇번 실행됨?')
    this.props.loadKeywordContents(this.getSearchedKeyword())
  }

  handleChangeValue = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({ isStartSearch: true })
  }

  getSearchedKeyword = () => {
    const [, keyword] = document.URL.split('=')
    return decodeURI(keyword)
  }

  renderSearchResults = () => {
    const { keywordContents } = this.props
    if (!keywordContents.length) return <div />
    return keywordContents.map(content => (
      <ContentCard key={content.id} content={content} />
    ))
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <SearchBar
          onChange={this.handleChangeValue}
          onSubmit={this.handleSubmit}
          path={`/bible/results?search=${this.state.search}`}
          value={
            this.state.isStartSearch
              ? this.state.search
              : this.getSearchedKeyword()
          }
        />
        <div className={cx(`${moduleName}-resultsBox`)}>
          {this.renderSearchResults()}
        </div>
      </div>
    )
  }
}

export default connect(
  ({ contents }) => ({
    keywordContents: contents.keywordContents
  }),
  {
    loadKeywordContents
  }
)(SearchResult)
