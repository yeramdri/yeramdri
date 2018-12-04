import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'

// 삶 이미지로 바꾸기
import bibleHeaderImg from 'src/App/pages/Home/assets/bible-header.jpg'
import SearchBar from 'src/components/SearchBar'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Life'

class Life extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recentContents: []
    }
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
          <h3>일상을 살아가기</h3>
        </div>
        <div className={cx(`${moduleName}-search`)}>
          <SearchBar path={`/bible/results?search=`} />
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

const ContentCard = props => {
  const {
    content: { id, title, image }
  } = props
  return (
    <div className={cx(`${moduleName}-contentCard`)}>
      <Link to={`/bible/${id}`}>
        <img src={image} alt="listImage" />
        <p>{title}</p>
      </Link>
    </div>
  )
}

export default Life
