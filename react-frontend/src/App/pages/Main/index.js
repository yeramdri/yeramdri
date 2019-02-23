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

  renderButtons = () => {
    const buttonData = [
      {
        type: 'bible',
        img: bibleImg,
        title: '말씀',
        subTitle: '예수, 나를 향한 사랑의 시작'
      },
      {
        type: 'life',
        img: lifeImg,
        title: '삶',
        subTitle: '하나님과 함께하는 일상들'
      }
    ];

    return buttonData.map(({type, img, title, subTitle}) => (
      <Link to={`/${type}`}>
        <div className={cx(`${moduleName}-button`)}>
          <div className={cx(`${moduleName}-button-imgWrapper`)}>
            <img src={img} alt='buttonImg' />
          </div>
          <h3 className={cx(`${type}`)}>{title}</h3>
          <p>{subTitle}</p>
        </div>
      </Link>
    ))
  }

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
          {this.renderButtons()}
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
              <p>복음을 들고, 사랑을 품고</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
