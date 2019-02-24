import React, {Component} from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames/bind'
import axios from 'axios'
import {searchKeyword} from 'src/redux/search/actions'
import SearchBar from 'src/components/SearchBar/SearchBar'
import ContentCard from 'src/components/ContentCard'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Bible'

class Bible extends Component {
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
      .get('https://www.yeramdri.com/card/bible')
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
          <h1>BIBLE</h1>
          <p className={cx(`${moduleName}-main-subTitle`)}>예수, 나를 향한 사랑의 시작</p>
          <SearchBar path={`/bible/results?search=`} />
          <div className={cx(`${moduleName}-main-iframeWrapper`)}>
            <iframe
              title="introduceVideo"
              src="https://www.youtube.com/embed/9xmdxhnIDT8?showinfo=0"
              frameBorder="0"
              gesture="media"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <p className={cx(`${moduleName}-main-explain`)}>
            YERAMDRI - 삶의 고백(A Confession of Life)
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

export default connect(
  ({search}) => ({keyword: search.keyword}),
  {
    searchKeyword
  }
)(Bible)
