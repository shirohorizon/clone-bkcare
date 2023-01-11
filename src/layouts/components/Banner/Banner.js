import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './Banner.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${images.banner})` }}
      className={cx('wrapper')}
    >
      <div className={cx('overlay')}></div>
      <div className={cx('content')}>
        <div className={cx('grid')}>
          <div className={cx('header')}>
            <h1 className={cx('title')}>
              Nền tảng y tế <br />
              <b>Chăm sóc sức khỏe toàn diện</b>
            </h1>
            <div className={cx('search')}>
              <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
              <input className={cx('search-input')} type="text" />
            </div>
            <div className={cx('download')}>
              <Button className={cx('download-link')}>
                <Image primary src={images.googlePlay} alt="google play" />
              </Button>
              <Button className={cx('download-link')}>
                <Image primary src={images.appStore} alt="app store" />
              </Button>
            </div>
          </div>
          <div className={cx('nav')}>
            <ul className={cx('list', 'row c10')}>
              <li className={cx('item', 'col lg-2')}>1</li>
              <li className={cx('item', 'col lg-2')}>1</li>
              <li className={cx('item', 'col lg-2')}>1</li>
              <li className={cx('item', 'col lg-2')}>1</li>
              <li className={cx('item', 'col lg-2')}>1</li>
              <li className={cx('item', 'col lg-2')}>1</li>
              <li className={cx('item', 'col lg-2')}>1</li>
              <li className={cx('item', 'col lg-2')}>1</li>
              <li className={cx('item', 'col lg-2')}>1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
