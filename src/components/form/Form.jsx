// src/components/form/Form.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton'

const Form = ({
  schema,
  onSubmit,
  children,
  defaultValues = {},
  successMessage,
  errorMessage,
  submitLabel = "Save",
  className = "",
  onCancel
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const handleInternalSubmit = async (data) => {
    try {
      await onSubmit(data, reset); // send data and reset to parent
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  const injectPropsToFields = (children) => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
  
      const isCustomComponent = typeof child.type !== 'string'; 
      // string = HTML tag like 'div', 'h2', etc. (we ignore these)
  
      if (isCustomComponent) {
        return React.cloneElement(child, {
          register,
          errors,
          children: injectPropsToFields(child.props.children)  // <<< Recursive call
        });
      }
  
      // Native HTML tag like div, h2
      if (child.props.children) {
        return React.cloneElement(child, {
          children: injectPropsToFields(child.props.children)  // <<< Still recursively inject inside div
        });
      }
  
      return child;
    });
  };

  return (
    <div className={`space-y-6 w-full ${className}`}>
      <form onSubmit={handleSubmit(handleInternalSubmit)} className="space-y-4">
        {/* Inject your fields */}
        {injectPropsToFields(children)}

        <div className="flex justify-end gap-3">
          {typeof onCancel === 'function' && <CancelButton onClick={onCancel} />}
          <SubmitButton isLoading={isSubmitting} label={submitLabel} />
        </div>
      </form>

      {/* Success / Error messages */}
      {successMessage && (
        <p className="text-green-500 font-semibold">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-500 font-semibold">{errorMessage}</p>
      )}
    </div>
  );
};

export default Form;