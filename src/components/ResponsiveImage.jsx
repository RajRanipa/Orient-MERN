// src/components/ResponsiveImage.jsx

import React from 'react';
import PropTypes from 'prop-types';

const ResponsiveImage = ({
  name,        // base image name (without -600/-1200/-1800)
  ext = 'webp', // image format
  alt = '',
  className = '',
  loading = 'lazy',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 60vw',
  folder = 'home', // customize if your images live elsewhere
}) => {
  return (
    <img
      src={`/front-image/${folder}/${name}_1200.${ext}`}
      srcSet={`
        /front-image/${folder}/${name}_600.${ext} 600w,
        /front-image/${folder}/${name}_1200.${ext} 1200w,
        /front-image/${folder}/${name}_1800.${ext} 1800w
      `}
      sizes={sizes}
      alt={alt}
      loading={loading}
      className={className}
    />
  );
};

ResponsiveImage.propTypes = {
  name: PropTypes.string.isRequired,
  ext: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  sizes: PropTypes.string,
  folder: PropTypes.string,
};

export default ResponsiveImage;