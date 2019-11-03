import React, { Component } from "react";
import classnames from 'classnames/bind';
import css from './index.scss';
import { getAllContents } from 'src/api';

const cx = classnames.bind(css);
const moduleName = 'NewContents'

const mock = [0,0,0,0,0,0,0,0];

class NewContents extends Component {

  componentDidMount() {
    getAllContents().then(s => console.log(s))
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        {mock.map(() => (
          <div className={cx(`ContentCard`)}>
            <div className={cx(`ContentCard-img`)} />
            <div className={cx(`ContentCard-text`)}>
              <p className={cx(`ContentCard-text-title`)}>제목이얌</p>
              <p className={cx(`ContentCard-text-date`)}>날짜야</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default NewContents;