import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'

import yeramdriLogo from 'src/assets/yeramdri-logo.svg'

import css from './Header.scss'
const cx = classnames.bind(css)
const moduleName = 'Header'

const Header = () => {
  return (
    <div className={cx(`${moduleName}`)}>
      <Link className={cx(`${moduleName}-logo`)} to="/">
        <img src={yeramdriLogo} alt="logo" />
      </Link>
    </div>
  )
}

export default Header
