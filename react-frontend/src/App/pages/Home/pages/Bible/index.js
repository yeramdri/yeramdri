import React, { Component } from 'react'
import classnames from 'classnames/bind'

import bibleHeaderImg from 'src/App/pages/Home/assets/bible-header.jpg'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Bible'

class Bible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  handleChangeValue = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-head`)}>
          <img src={bibleHeaderImg} alt="bible-header-img" />
          <h1>BIBLE</h1>
          <h3>예수, 나를 향한 사랑의 시작</h3>
        </div>
        <div className={cx(`${moduleName}-search`)}>
          <form>
            <div className={cx(`${moduleName}-search-inputWrapper`)}>
              <input
                onChange={this.handleChangeValue}
                placeholder="Search Bible"
                name="search"
              />
            </div>
            <div className={cx(`${moduleName}-search-icon`)}>
              <i className="fas fa-search" />
            </div>
          </form>
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
          <h3>최근 컨텐츠</h3>
          <div className={cx(`${moduleName}-contentsBox`)}>
            <div>컨텐츠1</div>
            <div>컨텐츠2</div>
            <div>컨텐츠3</div>
            <div>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bible
