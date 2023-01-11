import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  disabled = false,
  leftIcon = false,
  rightIcon = false,
  mesnums,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  if (disabled) {
    for (const key in props) {
      key.startsWith('on') && typeof key === 'function' && delete props['key'];
    }
  }

  const classes = cx('wrapper', {
    primary,
    disabled,
    [className]: className,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && (
        <span className={cx('icon')}>
          {leftIcon}
          {mesnums && <span className={cx('mesnums')}>{mesnums}</span>}
        </span>
      )}
      <span className={cx('title')}>{children}</span>
      {rightIcon && (
        <span className={cx('icon')}>
          {rightIcon}
          {mesnums && <span className={cx('mesnums')}>{mesnums}</span>}
        </span>
      )}
    </Comp>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  href: PropTypes.string,
  // primary: PropTypes.bool,
  // outline: PropTypes.bool,
  // text: PropTypes.bool,
  // rounded: PropTypes.bool,
  // disabled: PropTypes.bool,
  // small: PropTypes.bool,
  // large: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
