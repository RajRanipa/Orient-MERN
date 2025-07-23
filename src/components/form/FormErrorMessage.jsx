import React from 'react';
import PropTypes from 'prop-types';

const FormErrorMessage = ({ name, errors }) => {
  if (!errors || !errors[name]) return null;

  return (
    <p className="mt-1 text-sm text-red-500">
      {errors[name]?.message}
    </p>
  );
};

FormErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

export default FormErrorMessage;