import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CustomScroll.module.scss';

const cx = classNames.bind(styles);

const CustomScroll = ({
  width = '100%',
  height = '100%',
  overflowX = false,
  overflowY = true,
  children,
  ...passProps
}) => {
  const classes = cx({
    overflowX,
    overflowY,
  });
  return (
    <div
      id={styles.wrapper}
      style={{ width: width, height: height }}
      className={classes}
      {...passProps}
    >
      {children}
    </div>
  );
};

CustomScroll.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  overflowX: PropTypes.bool,
  overflowY: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CustomScroll;
