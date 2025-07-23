import React from 'react';
import PropTypes from 'prop-types';
import FormErrorMessage from './FormErrorMessage';

const TextInput = ({
  label,
  name,
  placeholder,
  register,
  value,
  onChange,
  errors = {},
  required = false,
  className = '',
  type = 'text',
}) => {
  const inputProps = {
    id: name,
    name,
    placeholder,
    type,
    className:
      'w-full px-4 py-2 border border-inputBorder rounded-md bg-inputBg text-inputText focus:outline-none focus:ring-2 focus:ring-inputOutline transition',
    ...(register ? register(name, { required }) : {}),
    ...(onChange ? { onChange } : {}),
    ...(value !== undefined ? { value } : {}),
  };

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
      <input {...inputProps} />
      <FormErrorMessage name={name} errors={errors} />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.object,
  required: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;