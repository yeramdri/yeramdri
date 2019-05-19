import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import classnames from 'classnames/bind'
import { loadRecentContents } from 'src/redux/contents/actions';
import ContentsList from 'src/components/ContentsList';
import YoutubePlayer from 'src/components/YoutubePlayer';
import SearchBar from 'src/components/SearchBar/SearchBar'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Bible'

class Bible extends Component {

  componentDidMount() {
    this.props.loadRecentContents('bible');
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <h1>BIBLE</h1>
        <p className={cx(`${moduleName}-subTitle`)}>예수, 나를 향한 사랑의 시작</p>
        <div className={cx(`${moduleName}-searchWrapper`)}>
          <SearchBar path={`/bible/results?search=`} />
        </div>
        <div className={cx(`${moduleName}-contentsWrapper`)}>
          <div className={cx(`${moduleName}-contentsWrapper-right`)}>
            <YoutubePlayer title="introduceVideo" src="9xmdxhnIDT8" />
            <p className={cx(`${moduleName}-explain`)}>
              YERAMDRI - 삶의 고백(A Confession of Life)
              </p>
          </div>
          <div className={cx(`${moduleName}-contentsWrapper-left`)}>
            <ContentsList title="말씀 최신 컨텐츠" contentsCount={3} columnOneLine={1} />
          </div>
        </div>
      </div>
    )
  }
}

Bible.propTypes = {
  loadRecentContents: PropTypes.func
}

const mapStateToProps = () => ({});
const mapDispatchToProps = { loadRecentContents };

export default connect(mapStateToProps, mapDispatchToProps)(Bible)
