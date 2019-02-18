import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames/bind';
import css from './SideNavbar.scss';

const cx = classnames.bind(css);
const moduleName = 'SideNavbar';

const SideNavbar = () => {
  return (
    <div className={cx(`${moduleName}`)}>
      <h3>
        <Link to="/bible">말씀</Link>
      </h3>
      <h3>
        <Link to="/life">삶</Link>
      </h3>
      <h3 onClick={() => {alert('준비중 입니다 :)')}}>
        사역
      </h3>
    </div>
  )
}

export default SideNavbar;