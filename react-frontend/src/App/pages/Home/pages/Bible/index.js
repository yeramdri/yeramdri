import React, { Component } from 'react'
import classnames from 'classnames/bind'
import axios from 'axios'

import bibleHeaderImg from 'src/App/pages/Home/assets/bible-header.jpg'
import { axiosConfig } from 'src/utils/axiosUtils'

import SearchBar from 'src/components/SearchBar'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Bible'

class Bible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',

      recentContents: []
    }
  }

  componentDidMount() {
    this.getRecentlyContents()
  }

  handleChangeValue = e => this.setState({ [e.target.name]: e.target.value })

  getRecentlyContents = () => {
    axios
      .post('http://localhost:6508/bible-card', axiosConfig)
      .then(res => this.setState({ recentContents: [...res.data] }))
      .catch(err => console.log(err))
  }

  renderContents = () => {
    return this.state.recentContents.map((content) => <ContentCard key={content.id} content={content}/>)
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
          <SearchBar onChange={this.handleChangeValue} />
        </div>
        <div className={cx(`${moduleName}-mainVideo`)}>
          <iframe
            title="introduceVideo"
            src="https://www.youtube.com/embed/9xmdxhnIDT8"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <h3>YERAMDRI - 삶의 고백(A Confession of Life)</h3>
        </div>
        <div className={cx(`${moduleName}-recentContents`)}>
          <h3>최신 컨텐츠</h3>
          <div>
          { this.state.recentContents.length ? this.renderContents() : <div> Loading </div>}
            <div className={cx(`${moduleName}-downIcon`)}>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const ContentCard = (props) => {
  const {content: { title, image }} = props
  return (
    <div className={cx(`${moduleName}-contentCard`)}>
      <img src={image} alt="listImage" />
      <p>{title}</p>
    </div>
  )
}

export default Bible
