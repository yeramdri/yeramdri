import React, { Component } from 'react';
import classnames from 'classnames/bind';

import css from './index.scss';
const cx = classnames.bind(css);
const moduleName = 'Main';



class Main extends Component {
  render(){
    return(
      <div className={cx(`${moduleName}`)}>
        메인입니다.
    </div>
    );
  }
}

export default Main;
