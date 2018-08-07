import React, { Component } from 'react';
import classnames from 'classnames/bind';

import css from './index.scss';
const cx = classnames.bind(css);
const moduleName = 'Room';



class Bible extends Component {
  render(){
    return(
      <div className={cx(`${moduleName}`)}>
        바이블 페이지 입니다.
    </div>
    );
  }
}

export default Bible;
