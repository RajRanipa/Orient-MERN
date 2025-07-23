
import React from 'react';
import PropTypes from 'prop-types';

const CancelButton = ({ label = 'Cancel', onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full py-2 px-4 capitalize rounded-md bg-black text-gray font-semibold hover:bg-lightGray transition duration-200 ${className}`}
    >
      {label}
    </button>
  );
};

CancelButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CancelButton;