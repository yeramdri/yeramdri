import React, { Component } from 'react';
import classnames from 'classnames/bind';

import css from './index.scss';
const cx = classnames.bind(css);
const moduleName = 'Life';



class Life extends Component {
  render(){
    return(
      <div className={cx(`${moduleName}`)}>
        삶입니다.
    </div>
    );
  }
}

export default Life;
