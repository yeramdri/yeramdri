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

    this.state = {}
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const keyword = this.getSearchedKeyword(this.props.location.search)
      this.props.loadKeywordContents(keyword)
    }
  }

  componentDidMount() {
    this.props.loadKeywordContents(this.getSearchedKeyword(document.URL))
  }

  getSearchedKeyword = urlPath => {
    const [, keyword] = urlPath.split('=')
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
        <SearchBar path={`/bible/results?search=`} />
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
