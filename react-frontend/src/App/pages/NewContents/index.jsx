import React from 'react';
import classnames from 'classnames/bind';
import css from './index.scss';

const cx = classnames.bind(css);
const moduleName = 'NewContents'

const NewContents = () => {
        return (
                <div>
                <h1 className={cx(`${moduleName}`)}> NewContents✨</h1>
                <ContentCard/>
                <ContentCard/><ContentCard/><ContentCard/><ContentCard/><ContentCard/><ContentCard/><ContentCard/><ContentCard/><ContentCard/><ContentCard/>
                </div>
                

        )
}

const ContentCard = () => {
        return (
                <div className={cx(`ContentCard`)}>박스야</div>
        )
}
export default NewContents;