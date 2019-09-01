import React from "react";
import classnames from 'classnames/bind';
import css from './index.scss';
const cx = classnames.bind(css)

const NewMain = () => {
    return (
        <div className={cx(`Main`)}>
            메인이야
        </div>
    );
};

export default NewMain;