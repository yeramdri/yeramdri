import React, {Component} from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames/bind'
import {loadRecentContents} from 'src/redux/contents/actions';
import ContentsList from 'src/components/ContentsList';
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
        <ContentsList title="말씀 최신 컨텐츠" />
      </div>
    )
  }
}

const mapStateToProps = ({
  contents: {contentsState, contents}
}) => ({contentsState, contents});
const mapDispatchToProps = {loadRecentContents};

export default connect(mapStateToProps, mapDispatchToProps)(Bible)
