import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCircleQuestion,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import styles from './Header.module.scss';
import config from '~/config';
import Image from '~/components/Image';
import images from '~/assets/images';
import { LOCALES } from '~/translations';
import { setLanguage } from '~/features/intl/intlSlice';
import { FormattedMessage } from 'react-intl';
import { showModal } from '~/features/modal/modalSlice';

const cx = classNames.bind(styles);

const navItems = [
  {
    title: <FormattedMessage id="header.specialty" />,
    detail: <FormattedMessage id="header.search-doctor" />,
  },
  {
    title: <FormattedMessage id="header.health-facility" />,
    detail: <FormattedMessage id="header.select-room" />,
  },
  {
    title: <FormattedMessage id="header.doctor" />,
    detail: <FormattedMessage id="header.select-doctor" />,
  },
  {
    title: <FormattedMessage id="header.fee" />,
    detail: <FormattedMessage id="header.check-health" />,
  },
];

const Header = () => {
  const [activeLang, setActiveLang] = useState(true);
  const dispatch = useDispatch();

  const handleSetLang = (locale) => {
    setActiveLang(locale === LOCALES.VIETNAM);
    dispatch(setLanguage(locale));
  };

  const handleShowModal = () => {
    dispatch(
      showModal({
        name: 'search',
        data: { topic: 'specialty' },
        effect: false,
        innerWidth: '100%',
      }),
    );
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('grid')}>
        <div className={cx('row')}>
          <div className={cx('col', 'inner')}>
            <div className={cx('actions-left')}>
              <FontAwesomeIcon className={cx('bar-icon')} icon={faBars} />
              <Link to={config.routes.header} className={cx('logo-link')}>
                <Image className={cx('logo')} src={images.logo} alt={'logo'} />
              </Link>
            </div>
            <div className={cx('nav')}>
              {/* header nav */}
              <ul className={cx('nav-list')}>
                {navItems.map((item, index) => (
                  <li
                    onClick={() => handleShowModal()}
                    key={index}
                    className={cx('nav-item')}
                  >
                    <h3 className={cx('nav-title')}>{item.title}</h3>
                    <p className={cx('nav-detail')}>{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx('actions-right')}>
              {/* actions 'Supports', 'language' */}
              <div className={cx('support')}>
                <FontAwesomeIcon
                  className={cx('support-icon')}
                  icon={faCircleQuestion}
                />
                <span className={cx('action-title')}>
                  <FormattedMessage id="header.support" />
                </span>
              </div>
              <div className={cx('language')}>
                <FontAwesomeIcon
                  className={cx('language-icon')}
                  icon={faLanguage}
                />
                <span
                  onClick={() => handleSetLang(LOCALES.VIETNAM)}
                  className={cx('action-title', { active: activeLang })}
                >
                  VN
                </span>
                <span
                  onClick={() => handleSetLang(LOCALES.ENGLISH)}
                  className={cx('action-title', { active: !activeLang })}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
