import React from "react";
import classnames from 'classnames/bind';
import css from './index.scss';
const cx = classnames.bind(css)

const NewMain = () => {
    return (
        <div className={cx(`Main`)}>
            <div className={cx('Main-title')}>
                <h1><b>예배자들</b>의</h1>
                <h4><b>삶</b>이</h4>
                <h3>아름드리</h3>
                <h2><b>꽃 피우길</b></h2>
            </div>
        </div>
    );
};

export default NewMain;