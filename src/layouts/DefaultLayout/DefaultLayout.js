import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <h1>Default Layout</h1>
      {children}
    </div>
  );
};

DefaultLayout.propTypes = {
  classNames: PropTypes.node.isRequired,
};

export default DefaultLayout;
