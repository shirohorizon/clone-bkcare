import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './SearchByTopic.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { hideModal } from '~/features/modal/modalSlice';
import Image from '../Image';
import CustomScroll from '../CustomScroll';
import { FormattedMessage, useIntl } from 'react-intl';

const cx = classNames.bind(styles);

const topics = {
  specialty: {
    headerTitle: <FormattedMessage id="search-topic.specialty.header-title" />,
    placeholder: 'search-topic.specialty.placeholder',
    listTitle: <FormattedMessage id="search-topic.specialty.list-title" />,
  },
};

const SearchByTopic = ({ data }) => {
  const [topic, setTopic] = useState({});
  const intl = useIntl();

  useEffect(() => {
    setTopic({
      ...topics[data.topic],
      placeholder: intl.formatMessage({ id: topics[data.topic].placeholder }),
    });
  }, [data.topic, intl]);

  const dispatch = useDispatch();
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <FontAwesomeIcon
          onClick={() => dispatch(hideModal())}
          className={cx('back-icon')}
          icon={faLeftLong}
        />
        <h2 className={cx('title')}>{topic.headerTitle}</h2>
      </header>
      <div className={cx('search-wrap')}>
        <input
          placeholder={topic.placeholder}
          className={cx('search')}
          type={'text'}
        />
      </div>
      <ul className={cx('list')}>
        <h3 className={cx('list-title')}>{topic.listTitle}</h3>
        <CustomScroll>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
          <li className={cx('item')}>
            <Image className={cx('item-img')} src="" />
            <p className={cx('item-name')}>{1}</p>
          </li>
        </CustomScroll>
      </ul>
    </div>
  );
};

export default SearchByTopic;
