import React from 'react';
import PropTypes from 'prop-types';
import { CubeGrid } from 'better-react-spinkit';
import classnames from 'classnames/bind';
import css from './index.scss';
const cx = classnames.bind(css);
const moduleName = 'Loading';

const Loading = ({ isLoading, color, size }) => {
  if (!isLoading) return null;
  return (
    <div className={cx(`${moduleName}`)}>
      <CubeGrid size={size} color={color} />
    </div>
  );
};

Loading.defaultProps = {
  isLoading: true,
  color: "#ffc9c9",
  size: 50
}
Loading.propTypes = {
  isLoading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number
}

export default Loading;