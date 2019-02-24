import React, {Component} from 'react'
import classnames from 'classnames/bind'
import {connect} from 'react-redux'

import SearchBar from 'src/components/SearchBar/SearchBar'
import {loadKeywordContents} from 'src/redux/contents/actions'

import css from './SearchResult.scss'
import ContentCard from 'src/components/ContentCard'
const cx = classnames.bind(css)
const moduleName = 'SearchResult'

class SearchResult extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getKeywordContents(this.props.location.search)
    }
  }

  componentDidMount() {
    this.getKeywordContents(document.URL)
  }

  getKeywordContents = urlPath => {
    const keyword = this.getSearchedKeyword(urlPath)
    const [, category] = this.props.location.pathname.split('/')
    this.props.loadKeywordContents(keyword, category)
  }

  getSearchedKeyword = urlPath => {
    const [, keyword] = urlPath.split('search=')
    return decodeURI(keyword)
  }

  renderSearchResults = () => {
    const {keywordContents} = this.props
    if (!keywordContents.length) return <div />
    return keywordContents.map(content => (
      <ContentCard key={content.id} content={content} />
    ))
  }

  render() {
    const page = document.URL.split('/')[3];
    const path = page.indexOf('results') === -1
      ? `/${page}/results?search=`
      : `/results?search=`;
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-searchWrapper`)}>
          <SearchBar path={path} />
        </div>
        <div className={cx(`${moduleName}-resultsBox`)}>
          {this.renderSearchResults()}
        </div>
      </div>
    )
  }
}

export default connect(
  ({contents}) => ({
    keywordContents: contents.keywordContents
  }),
  {
    loadKeywordContents
  }
)(SearchResult)
