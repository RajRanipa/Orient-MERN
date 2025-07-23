import React from 'react';
import PropTypes from 'prop-types';
import FormErrorMessage from './FormErrorMessage';

const Checkbox = ({ label, name, register, errors = {}, required = false, className = '' }) => {
  return (
    <div className={`mb-4 flex items-start space-x-2 ${className}`}>
      <input
        type="checkbox"
        name={name}
        id={name}
        {...register(name, { required })}
        className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary dark:bg-background dark:border-border"
      />
      <label htmlFor={name} className="text-gray">
        {label}
      </label>
      <FormErrorMessage name={name} errors={errors} />
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default Checkbox;
