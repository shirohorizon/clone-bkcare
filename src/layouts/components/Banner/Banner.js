import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

import styles from './Banner.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const navItems = [
  {
    image: images.chuyenKhoa,
    title: 'home-banner.exam-specialty',
  },
  {
    image: images.khamTuXa,
    title: 'home-banner.exam-remote',
  },
  {
    image: images.tongQuat,
    title: 'home-banner.exam-general',
  },
  {
    image: images.xetNghiem,
    title: 'home-banner.medical-analysis',
  },
  {
    image: images.sucKhoeTinhThan,
    title: 'home-banner.health-mental',
  },
  {
    image: images.nhaKhoa,
    title: 'home-banner.exam-dentistry',
  },
  {
    image: images.phauThuat,
    title: 'home-banner.surgery-package',
  },
  {
    image: images.taiNha,
    title: 'home-banner.medical-products',
  },
  {
    image: images.sucKhoeDoanhNghiep,
    title: 'home-banner.business-health',
  },
];

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
              <FormattedMessage
                id="home-banner.title"
                values={{
                  br: <br />,
                  b: (...title) => <b>{title}</b>,
                }}
              />
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
              {navItems.map((e, index) => (
                <li key={index} className={cx('item', 'col lg-2')}>
                  <Button to={'/'}>
                    <div className={cx('nav_content')}>
                      <div className={cx('nav_icon')}>
                        <Image className={cx('icon')} src={e.image} />
                      </div>
                      <p className={cx('nav_title')}>
                        <FormattedMessage
                          id={e.title}
                          values={{
                            code: <br />,
                          }}
                        />
                      </p>
                    </div>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
