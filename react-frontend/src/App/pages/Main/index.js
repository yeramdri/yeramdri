import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames/bind'
import SearchBar from 'src/components/SearchBar';
import bibleImg from 'src/assets/bible-card.jpg';
import lifeImg from 'src/assets/life-card2.jpg';
import ministryImg from 'src/assets/ministry-card.jpg';
import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Main'

class Main extends Component {
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-words`)}>
          <h1 className={cx(`${moduleName}-words-title`)}>예람드리</h1>
          <p className={cx(`${moduleName}-words-subTitle`)}>
            예배자들의 삶이<br />아름드리 꽃피우길
          </p>
        </div>
        <div className={cx(`${moduleName}-searchbarWrapper`)}>
          <SearchBar placeholder="#말씀, #삶, #사역" />
        </div>
        <div className={cx(`${moduleName}-buttonContainer`)}>
          <Link to="/bible">
            <div className={cx(`${moduleName}-button`)}>
              <div className={cx(`${moduleName}-button-imgWrapper`)}>
                <img src={bibleImg} alt='bibleImg' />
              </div>
              <h3 className={cx("bible")}>말씀</h3>
              <p>예수, 나를 향한 사랑의 시작</p>
            </div>
          </Link>
          <Link to="/life">
            <div className={cx(`${moduleName}-button`, 'life')}>
              <div className={cx(`${moduleName}-button-imgWrapper`)}>
                <img src={lifeImg} alt='lifeImg' />
              </div>
              <h3>삶</h3>
              <p>일상을 살아가는 크리스천 청년</p>
            </div>
          </Link>
          <div>
            <div
              className={cx(`${moduleName}-button`, `${moduleName}-button-last`, 'ministry')}
              onClick={() => {
                alert('준비중 입니다 :)')
              }}
            >
              <div className={cx(`${moduleName}-button-imgWrapper`)}>
                <img src={ministryImg} alt='ministryImg' />
              </div>
              <h3>사역</h3>
              <p>예수, 나를 향한 사랑의 시작</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
