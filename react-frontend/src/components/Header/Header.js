import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'

import yeramdriLogo from 'src/assets/yeramdri-logo.svg'

import css from './Header.scss'
const cx = classnames.bind(css)
const moduleName = 'Header'

const Header = ({ toggleSidebar }) => {
  return (
    <div className={cx(`${moduleName}`)}>
      <i onClick={toggleSidebar} className="fas fa-bars" />
      <Link className={cx(`${moduleName}-logo`)} to="/">
        <img src={yeramdriLogo} alt="logo" />
      </Link>
    </div>
  )
}

export default Header
