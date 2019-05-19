import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames/bind'
import ContentsList from 'src/components/ContentsList';
import SearchBar from 'src/components/SearchBar/SearchBar';
import YoutubePlayer from 'src/components/YoutubePlayer';
import { loadRecentContents } from 'src/redux/contents/actions';
import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Life'

class Life extends Component {

  componentDidMount() {
    this.props.loadRecentContents('life');
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <h1>Life</h1>
        <p className={cx(`${moduleName}-subTitle`)}>하나님과 함께하는 일상들</p>
        <div className={cx(`${moduleName}-searchWrapper`)}>
          <SearchBar path={`/life/results?search=`} />
        </div>
        <div className={cx(`${moduleName}-contentsWrapper`)}>
          <div className={cx(`${moduleName}-contentsWrapper-right`)}>
            <YoutubePlayer title="introduceVideo" src="EO0yIxS1OnE" />
            <p className={cx(`${moduleName}-explain`)}>
              예람드리, 그와 함께하는 나날들
          </p>
          </div>
          <div className={cx(`${moduleName}-contentsWrapper-left`)}>
            <ContentsList
              title="최신 Life 컨텐츠"
              contentsCount={3}
              columnOneLine={1}
              category="life"
            />
          </div>
        </div>
      </div >
    )
  }
}

Life.propTypes = {
  loadRecentContents: PropTypes.func
}

const mapStateToProps = () => ({});
const mapDispatchToProps = { loadRecentContents };

export default connect(mapStateToProps, mapDispatchToProps)(Life)
