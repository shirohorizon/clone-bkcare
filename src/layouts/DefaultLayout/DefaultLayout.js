import React from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <h1>Default Layout</h1>
      {children}
    </div>
  );
};

export default DefaultLayout;
