

import React, { useEffect } from 'react';
import { FiCheckCircle, FiInfo, FiAlertTriangle, FiXCircle, FiX } from 'react-icons/fi';

const toastIcons = {
  success: <FiCheckCircle className="text-green-600 dark:text-green-400" />,
  error: <FiXCircle className="text-red-600 dark:text-red-400" />,
  info: <FiInfo className="text-blue-600 dark:text-blue-400" />,
  warning: <FiAlertTriangle className="text-yellow-600 dark:text-yellow-400" />,
};

const Toast = ({ id, message, type = 'info', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 mb-3 rounded shadow-lg bg-bg-surface text-text-D-dark border-l-4
        ${type === 'success' && 'border-green-600'}
        ${type === 'error' && 'border-red-600'}
        ${type === 'info' && 'border-blue-600'}
        ${type === 'warning' && 'border-yellow-600'}
      `}
    >
      {toastIcons[type]}
      <span className="text-sm flex-1">{message}</span>
      <button onClick={() => onClose(id)} className="text-text-D-light hover:text-text-D-dark">
        <FiX />
      </button>
    </div>
  );
};

export default Toast;