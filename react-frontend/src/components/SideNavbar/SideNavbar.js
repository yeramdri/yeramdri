import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames/bind';
import css from './SideNavbar.scss';

const cx = classnames.bind(css);
const moduleName = 'SideNavbar';

const SideNavbar = () => {
  return (
    <div className={cx(`${moduleName}`)}>
      <p className={cx(`${moduleName}-title`)}>
        <Link to="/bible">말씀.</Link>
      </p>
      <p className={cx(`${moduleName}-title`)}>
        <Link to="/life">삶.</Link>
      </p>
      <p
        className={cx(`${moduleName}-title`)}
        onClick={() => {alert('준비중 입니다 :)')}}
      >
        사역.
      </p>
      
      <p className={cx(`${moduleName}-underTitle`)}>
        예배자들의 삶이<br/>
        아름드리 꽃 피우길.
      </p>
    </div>
  )
}

export default SideNavbar;