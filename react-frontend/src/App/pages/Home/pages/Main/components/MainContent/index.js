import React, { Component } from 'react';
import classnames from 'classnames/bind';

import css from './index.scss';
const cx = classnames.bind(css);
const moduleName = 'MainContent';

class MainContent extends Component {
  render(){
    return(
      <div className={cx(`${moduleName}`)}>
      </div>
    )
  }
}
export default MainContent;

