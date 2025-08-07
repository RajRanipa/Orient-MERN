import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ title, background, childclass, className = '' }) => {

  return (
    <div className={`min-h-screen min-w-screen w-screen h-screen bg-white fixed z-[999] ${className}`}>
      <div className={`${childclass || ''} w-full h-full flex items-center justify-center`} background={background}>
        {title && (
          <h1 className="text-2xl font-bold tracking-tight text-primary text-center">
            {title}
          </h1>
        )}        
      </div>
    </div>
  );
};

Loading.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Loading;
