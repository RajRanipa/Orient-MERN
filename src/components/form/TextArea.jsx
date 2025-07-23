import React from 'react';
import PropTypes from 'prop-types';
import FormErrorMessage from './FormErrorMessage';

const TextArea = ({
  label,
  name,
  placeholder,
  register,
  errors = {},
  required = false,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-text mb-1"
        >
           {label}{' '}
          {required ? (
            <span className="text-error">*</span>
          ) : (
            <span className="text-xs text-lightGray">(optional)</span>
          )}
        </label>
      )}
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        {...register(name, { required })}
        rows={4}
        className="w-full px-4 py-2 rounded-md border border-inputBorder bg-[var(--input-bg-color)] text-inputText focus:outline-none focus:ring-2 focus:ring-primary transition"
      />
      <FormErrorMessage name={name} errors={errors} />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default TextArea;
