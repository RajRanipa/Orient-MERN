// // src/components/ResponsiveImage.jsx

// import React from 'react';
// import PropTypes from 'prop-types';
// import { cn } from '../utils/cn';

// const ResponsiveImage = ({
//   name,        // base image name (without -600/-1200/-1800)
//   ext = 'webp', // image format
//   alt = '',
//   className = '',
//   loading = 'lazy',
//   sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 33vw",
//   folder = 'home', // customize if your images live elsewhere
// }) => {
//   return (
//       <img
//         src={`/front-image/${folder}/${name}_600.${ext}`}
//         srcSet={`
//         /front-image/${folder}/${name}_600.${ext} 600w,
//         /front-image/${folder}/${name}_1200.${ext} 1200w,
//         /front-image/${folder}/${name}_1800.${ext} 1800w
//       `}
//         sizes={sizes}
//         alt={alt}
//         loading={loading}
//         className={cn(className)}
//       />
//   );
// };

// ResponsiveImage.propTypes = {
//   name: PropTypes.string.isRequired,
//   ext: PropTypes.string,
//   alt: PropTypes.string,
//   className: PropTypes.string,
//   loading: PropTypes.oneOf(['lazy', 'eager']),
//   sizes: PropTypes.string,
//   folder: PropTypes.string,
// };

// export default ResponsiveImage;

// src/components/ResponsiveImage.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils/cn';

const ResponsiveImage = ({
  name,
  ext = 'webp',
  alt = '',
  className = '',
  loading = 'lazy',
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 33vw",
  folder = 'home',
  thumbSuffix = '_20', // New prop for the tiny blurred image
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Construct the base paths
  const basePath = `/front-image/${folder}/${name}`;
  const lowResSrc = `${basePath}_600${thumbSuffix}.${ext}`;

  return (
    // 1. Wrapper: Needs relative positioning to stack the images. 
    // We apply your custom className here so it dictates the size of the container.
    <div className={cn("relative overflow-hidden w-full h-full", className)}>
      
      {/* 2. Low-Res Blurred Placeholder */}
      <img
        src={lowResSrc}
        alt=""
        aria-hidden="true" // Hide from screen readers since the main image has the alt text
        className={cn(
          "absolute inset-0 w-full h-full object-cover",
          "blur-xl scale-110", // scale-110 hides the unblurred white edges caused by the CSS blur filter
          "transition-opacity duration-700 ease-in-out",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />

      {/* 3. High-Res Responsive Image */}
      <img
        src={`${basePath}_600.${ext}`}
        srcSet={`
          ${basePath}_600.${ext} 600w,
          ${basePath}_1200.${ext} 1200w,
          ${basePath}_1800.${ext} 1800w
        `}
        sizes={sizes}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)} // Triggers when the browser finishes downloading the optimal image
        className={cn(
          "relative w-full h-full object-cover",
          "transition-opacity duration-700 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
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
  thumbSuffix: PropTypes.string,
};

export default ResponsiveImage;