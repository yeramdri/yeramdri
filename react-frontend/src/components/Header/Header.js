import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";

import yeramdriLogo from "src/assets/yeramdri-logo.svg";

import css from "./Header.scss";
const cx = classnames.bind(css);
const moduleName = "Header";

const Header = ({ toggleSidebar }) => {
  return (
    <div className={cx(`${moduleName}-fake-layer`)}>
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-title-logo-wrapper`)}>
          <Link className={cx(`${moduleName}-logo`)} to="/">
            <img src={yeramdriLogo} alt="logo" />
          </Link>
          <Link to="/">
            <h1>Yeramdri</h1>
          </Link>
        </div>
        <i onClick={toggleSidebar} className="fas fa-bars" />
      </div>
    </div>
  );
};

export default Header;
