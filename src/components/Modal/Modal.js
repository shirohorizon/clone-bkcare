import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { hideModal } from '~/features/modal/modalSlice';
import styles from './Modal.module.scss';
import SearchByTopic from '../SearchByTopic';

const cx = classNames.bind(styles);
const modals = {
  search: SearchByTopic,
};

const Modal = ({ closeBtn = false, overlay = true }) => {
  const { isShow, name, data, effect, innerWidth } = useSelector(
    (state) => state.modal,
  );
  const [showModal, setShowModal] = useState(false);
  const [inner, setInner] = useState({});

  const dispatch = useDispatch();

  const effects = effect ? [{ hide: !isShow }, { show: isShow }] : [];

  useEffect(() => {
    if (!isShow) {
      setTimeout(() => {
        setShowModal(isShow);
        setInner({});
      }, 200);
    } else {
      let Inner = name ? modals[name] : Fragment;
      setShowModal(isShow);
      setInner({ width: innerWidth, component: <Inner data={data} /> });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  return (
    <div className={cx({ wrapper: showModal })}>
      {showModal ? (
        <Fragment>
          <div
            onClick={() => dispatch(hideModal())}
            className={cx('overlay', ...effects, { whiteMode: !overlay })}
          ></div>
          <div
            style={{ width: inner.width }}
            className={cx('inner', ...effects)}
          >
            {inner.component}
            {closeBtn || (
              <span
                onClick={() => dispatch(hideModal())}
                className={cx('close')}
              >
                <FontAwesomeIcon icon={faXmark} />
              </span>
            )}
          </div>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </div>
  );
};

Modal.propTypes = {
  closeBtn: PropTypes.bool,
  overlay: PropTypes.bool,
};

export default Modal;
