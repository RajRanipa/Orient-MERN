import React from 'react';
import PropTypes from 'prop-types';
import FormErrorMessage from './FormErrorMessage';

const SelectInput = ({
  label,
  name,
  register,
  options = [],
  errors = {},
  required = false,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray mb-1"
        >
           {label}{' '}
          {required ? (
            <span className="text-error">*</span>
          ) : (
            <span className="text-xs text-lightGray">(optional)</span>
          )}
        </label>
      )}
      <select
        name={name}
        id={name}
        {...register(name, { required })}
        className="w-full px-4 py-2 border border-inputBorder rounded-md bg-[var(--input-bg-color)] text-inputText focus:outline-none focus:ring-2 focus:ring-primary transition"
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <FormErrorMessage name={name} errors={errors} />
    </div>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  errors: PropTypes.object,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default SelectInput;
