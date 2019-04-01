import React, {Component} from 'react'
import {connect} from 'react-redux';
import classnames from 'classnames/bind'
import ContentsList from 'src/components/ContentsList';
import SearchBar from 'src/components/SearchBar/SearchBar';
import {loadRecentContents} from 'src/redux/contents/actions';
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
        <ContentsList title="최신 Life 컨텐츠" />
      </div>
    )
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {loadRecentContents};

export default connect(mapStateToProps, mapDispatchToProps)(Life)
