import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CustomScroll from '~/components/CustomScroll';
const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <CustomScroll>
        <Header />
        <Banner />
        <h1>Default Layout</h1>
        {children}
      </CustomScroll>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
