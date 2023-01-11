import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import classNames from 'classnames/bind';
import style from './Images.module.scss';

const cx = classNames.bind(style);

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      primary = false,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');

    const handleErr = () => {
      setFallback(customFallback);
    };
    const classes = cx(
      'wrapper',
      {
        primary,
      },
      className,
    );

    return (
      <img
        className={classes}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleErr}
      />
    );
  },
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
  primary: PropTypes.bool,
};

export default Image;
