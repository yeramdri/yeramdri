import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'

import css from './index.scss'
const cx = classnames.bind(css)
const moduleName = 'Main'

class Main extends Component {
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-cover`)}>
          <h1 className={cx(`${moduleName}-title`)}>예람드리</h1>
          <p className={cx(`${moduleName}-subTitle`)}>
            예배자들의 삶이 아름드리 꽃피우길
          </p>
        </div>
        <div className={cx(`${moduleName}-buttonContainer`)}>
          <Link to="/bible">
            <div className={cx(`${moduleName}-button`, 'bible')}>
              <h3>말씀</h3>
              <i className="fas fa-angle-right" />
            </div>
          </Link>
          <Link to="/life">
            <div className={cx(`${moduleName}-button`, 'life')}>
              <h3>삶</h3>
              <i className="fas fa-angle-right" />
            </div>
          </Link>
          <div
            className={cx(`${moduleName}-button`, 'ministry')}
            onClick={() => {
              alert('준비중 입니다 :)')
            }}
          >
            <h3>사역</h3>
            <i className="fas fa-angle-right" />
          </div>
        </div>
      </div>
    )
  }
}

export default Main