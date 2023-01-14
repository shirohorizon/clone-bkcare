import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CustomScroll from '~/components/CustomScroll';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <CustomScroll>
        <Header />
        <Banner />
        {children}
        <Footer />
      </CustomScroll>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
