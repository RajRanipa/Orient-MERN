import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ label = 'Submit', isLoading = false, className = '' }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`w-full py-2 px-4 capitalize rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? 'Submitting...' : label}
    </button>
  );
};

SubmitButton.propTypes = {
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};

export default SubmitButton;