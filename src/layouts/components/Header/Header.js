import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCaretDown,
  faCircleQuestion,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import config from '~/config';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('grid')}>
        <div className={cx('row')}>
          <div className={cx('col', 'inner')}>
            <div className={cx('actions-left')}>
              <FontAwesomeIcon className={cx('bar-icon')} icon={faBars} />
              <Link to={config.routes.home} className={cx('logo-link')}>
                <Image className={cx('logo')} src={images.logo} alt={'logo'} />
              </Link>
            </div>
            <div className={cx('nav')}>
              {/* header nav */}
              <ul className={cx('nav-list')}>
                <li className={cx('nav-item')}>
                  <h3 className={cx('nav-title')}>Chuyen khoa</h3>
                  <p className={cx('nav-detail')}>
                    Tim bac si theo chuyen khoa
                  </p>
                </li>
                <li className={cx('nav-item')}>
                  <h3 className={cx('nav-title')}>Chuyen khoa</h3>
                  <p className={cx('nav-detail')}>
                    Tim bac si theo chuyen khoa
                  </p>
                </li>
                <li className={cx('nav-item')}>
                  <h3 className={cx('nav-title')}>Chuyen khoa</h3>
                  <p className={cx('nav-detail')}>
                    Tim bac si theo chuyen khoa
                  </p>
                </li>
                <li className={cx('nav-item')}>
                  <h3 className={cx('nav-title')}>Chuyen khoa</h3>
                  <p className={cx('nav-detail')}>
                    Tim bac si theo chuyen khoa
                  </p>
                </li>
              </ul>
            </div>
            <div className={cx('actions-right')}>
              {/* actions 'Supports', 'language' */}
              <div className={cx('support')}>
                <FontAwesomeIcon
                  className={cx('support-icon')}
                  icon={faCircleQuestion}
                />
                <span className={cx('action-title')}>Support</span>
              </div>
              <div className={cx('language')}>
                <FontAwesomeIcon
                  className={cx('language-icon')}
                  icon={faLanguage}
                />
                <span className={cx('action-title')}>vn</span>
                <FontAwesomeIcon
                  className={cx('language-down')}
                  icon={faCaretDown}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
