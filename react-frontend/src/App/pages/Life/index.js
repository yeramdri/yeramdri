import React, {Component} from 'react'
import classnames from 'classnames/bind'
import axios from 'axios'

import SearchBar from 'src/components/SearchBar/SearchBar'
import ContentCard from 'src/components/ContentCard'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Life'

class Life extends Component {
  constructor (props) {
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
      .get('https://www.yeramdri.com/card/life')
      .then(res => this.setState({recentContents: [...res.data]}))
      .catch(err => console.log(err))
  }

  showMoreContents = () => {
    this.setState({recentContentsNumber: this.state.recentContentsNumber + 3})
  }

  isHideArrow = () => {
    const {recentContents, recentContentsNumber} = this.state
    return recentContents.length <= recentContentsNumber
  }

  renderContents = () => {
    const {recentContents, recentContentsNumber} = this.state
    const slicedContents = recentContents.slice(0, recentContentsNumber)
    return slicedContents.map(content => (
      <ContentCard key={content.id} content={content} />
    ))
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-main`)}>
          <h1>Life</h1>
          <p className={cx(`${moduleName}-main-subTitle`)}>
            하나님과 함께하는 일상들
          </p>
          <SearchBar path={`/life/results?search=`} />
          <div className={cx(`${moduleName}-main-iframeWrapper`)}>
            <iframe
              title="introduceVideo"
              src="https://www.youtube.com/embed/MlaVZuUvNwE?showinfo=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <p className={cx(`${moduleName}-main-explain`)}>
            YERAMDRI - 일상의 예배(Daily Worship)
          </p>
        </div>
        <div className={cx(`${moduleName}-recentContents`)}>
          <p className={cx(`${moduleName}-recentContents-title`)}>
            최신 컨텐츠
          </p>
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
