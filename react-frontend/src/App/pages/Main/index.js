import React, { Component } from 'react';
import classnames from 'classnames/bind';

// import MainContent from './components/MainContent';
// import MainIntroduce from './components/MainIntroduce'
import css from './index.scss';
const cx = classnames.bind(css);
const moduleName = 'Main';

class Main extends Component {
  render(){
    return(
      <div className={cx(`${moduleName}`)}>
        {/* <MainIntroduce />
        <MainContent /> */}
      </div>
    );
  }
}

export default Main;
