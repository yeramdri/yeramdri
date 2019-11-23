import React from 'react';
import classnames from 'classnames/bind';
import css from './index.scss';
const cx = classnames.bind(css)

const NewYeramdri = () => {
  return (
    <div className={cx('introduction')}>
      <div className={cx('content-stack')}>
        <div className={cx('content')}>
          <div className={cx('content-location')}>
            <p>예람드리는 <b>오합지졸 예배자들</b>입니다.</p>
            <p>하루하루 하나님의 자녀, 성도, 예배자로 살기원하지만,</p>
            <p>매번 무너지는 오합지졸입니다.</p>
          </div>
          <div className={cx('content-location')}>
            <p>그래도 <b>포기하거나 타협하고 싶지 않아서</b> 모였습니다.</p>
            <p>혼자서는 안을 수 없는 '아름드리' 나무도 함께라면</p>
            <p>넉넉히 안을 수 있기어 함께 모이게 되었습니다.</p>
          </div>
          <div className={cx('content-location')}>
            <p>그렇게 <b>예배자와 아름드리가 만나 '예람드리'</b>가 시작되었습니다.</p>
          </div>
        </div>
        <div className={cx('stack')}>
          <div className={cx('stack-location')}>
            <div className={cx('work')}>- 예람드리 전국 수련회 2회 진행</div>
          </div>
          <div className={cx('stack-location')}>
            <div className={cx('work')}>- 예람드리 찬양 앨범 준비중</div>
            <div className={cx('detail')}>시편 40편, 삶의 고백, 일상의 예배, 에베소서</div>
          </div>
          <div className={cx('stack-location')}>
            <div className={cx('work')}>- 청년 크리스천 커뮤니티 온&오프라인 공간 제작 중</div>
            <div className={cx('detail')}>http://www.yeramdri.net</div>
          </div>
        </div>
      </div>
      <div className={cx('title-sns')}>
        <div className={cx('title')}>
          <div className={cx('ye')}>예</div>
          <div className={cx('ram')}>람</div>
          <div className={cx('d')}>드</div>
          <div className={cx('ri')}>리</div>
        </div>
        <div className={cx('sns')}>
          <div className={cx('instagram')}>
            <div className={cx('text')}>
              <div>@yeramdri-worship</div>
              <div>@fourwork-fivepeople</div>
            </div>
            <div className={cx('logo')}>
              <img src={require('./assets/instagram.png')} ></img>
            </div>
          </div>
          <div className={cx('facebook')}>
            <div className={cx('text')}>
              <div>예람드리</div>
            </div>
            <div className={cx('logo')}>
              <img src={require('./assets/facebook.png')} ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default NewYeramdri;