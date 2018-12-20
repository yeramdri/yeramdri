import React, { Component } from 'react'
import classnames from 'classnames/bind'
import axios from 'axios'

import { axiosConfig } from 'src/utils/axiosUtils'
import lifeHeaderImg from 'src/assets/life-header.jpg'
import SearchBar from 'src/components/SearchBar/SearchBar'
import ContentCard from 'src/components/ContentCard'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Life'

class Life extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recentContents: [],
      recentContentsNumber: 3
    }
  }

  componentDidMount() {
    this.getRecentlyContents()
  }

  getRecentlyContents = () => {
    axios
      .post('https://www.yeramdri.com/life-card', axiosConfig)
      .then(res => this.setState({ recentContents: [...res.data] }))
      .catch(err => console.log(err))
  }

  showMoreContents = () => {
    this.setState({ recentContentsNumber: this.state.recentContentsNumber + 3 })
  }

  isHideArrow = () => {
    const {recentContents, recentContentsNumber} = this.state
    return recentContents.length <= recentContentsNumber
  }

  renderContents = () => {
    const { recentContents, recentContentsNumber } = this.state
    const slicedContents = recentContents.slice(0, recentContentsNumber)
    return slicedContents.map(content => (
      <ContentCard key={content.id} content={content} />
    ))
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-head`)}>
          <img src={lifeHeaderImg} alt="life-header-img" />
          <h1>Life</h1>
          <h3>일상을 살아가기</h3>
        </div>
        <div className={cx(`${moduleName}-search`)}>
          <SearchBar path={`/life/results?search=`} />
        </div>
        <div className={cx(`${moduleName}-mainVideo`)}>
          <iframe
            title="introduceVideo"
            src="https://www.youtube.com/embed/MlaVZuUvNwE?showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <h3>YERAMDRI - 일상의 예배(Daily Worship)</h3>
        </div>
        <div className={cx(`${moduleName}-recentContents`)}>
          <h3>최신 컨텐츠</h3>
          <div>
            {this.state.recentContents.length ? (
              this.renderContents()
            ) : (
              <div> Loading </div>
            )}
            <div className={cx(`${moduleName}-downIcon`, {hide: this.isHideArrow()})}>
              <i
                className="fas fa-chevron-down"
                onClick={this.showMoreContents}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Life
