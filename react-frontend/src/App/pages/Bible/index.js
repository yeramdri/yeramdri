import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames/bind'
import axios from 'axios'

import bibleHeaderImg from 'src/assets/bible-header.jpg'
import { axiosConfig } from 'src/utils/axiosUtils'
import { searchKeyword } from 'src/redux/search/actions'

import SearchBar from 'src/components/SearchBar/SearchBar'
import ContentCard from 'src/components/ContentCard'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Bible'

class Bible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recentContents: []
    }
  }

  componentDidMount() {
    this.getRecentlyContents()
  }

  getRecentlyContents = () => {
    axios
      // .post('http://localhost:6508/bible-card', axiosConfig)
      .post('http://172.20.10.4:6508/bible-card', axiosConfig)
      .then(res => this.setState({ recentContents: [...res.data] }))
      .catch(err => console.log(err))
  }

  renderContents = () => {
    return this.state.recentContents.map(content => (
      <ContentCard key={content.id} content={content} />
    ))
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-head`)}>
          <img src={bibleHeaderImg} alt="bible-header-img" />
          <h1>BIBLE</h1>
          <h3>예수, 나를 향한 사랑의 시작</h3>
        </div>
        <div className={cx(`${moduleName}-search`)}>
          <SearchBar path={`/bible/results?search=`} />
        </div>
        <div className={cx(`${moduleName}-mainVideo`)}>
          <iframe
            title="introduceVideo"
            src="https://www.youtube.com/embed/9xmdxhnIDT8?showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <h3>YERAMDRI - 삶의 고백(A Confession of Life)</h3>
        </div>
        <div className={cx(`${moduleName}-recentContents`)}>
          <h3>최신 컨텐츠</h3>
          <div>
            {this.state.recentContents.length ? (
              this.renderContents()
            ) : (
              <div> Loading </div>
            )}
            <div className={cx(`${moduleName}-downIcon`)}>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ search }) => ({ keyword: search.keyword }),
  {
    searchKeyword
  }
)(Bible)
