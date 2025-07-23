import React from 'react';
import PropTypes from 'prop-types';

const PageTransition = ({ children }) => {
  return (
    <div className="page-enter page-enter-active">
      {children}
    </div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
