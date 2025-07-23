import React, { useState, useEffect } from 'react';

const Dialog = ({
  isOpen,
  onClose,
  nature = 'info',
  title,
  message,
  timeout = 2500,
  minWidth = '300px',
  maxWidth = '600px',
  themeMode = false  // Accepting dark mode as a prop or you can use context
}) => {
  const [isAutoClose, setIsAutoClose] = useState(false);

  // Close the dialog after timeout for success nature
  useEffect(() => {
    if (nature === 'success' && isOpen) {
      setIsAutoClose(true);
      setTimeout(() => {
        onClose();  // Automatically close after 2.5 seconds
      }, timeout);
    }
  }, [isOpen, nature, timeout, onClose]);

  // Footer Buttons based on the dialog nature
  const renderFooter = () => {
    switch (nature) {
      case 'warning':
        return (
          <div className="flex justify-end space-x-4">
            <button onClick={onClose} className="btn-cancel">Cancel</button>
            <button onClick={() => { /* Continue Action */ }} className="btn-continue">Continue</button>
          </div>
        );
      case 'error':
        return (
          <div className="flex justify-center">
            <button onClick={onClose} className="btn-ok">OK</button>
          </div>
        );
      case 'formSubmition':
        return null;  // Success message will auto-close, no footer
        // return (
        //   <div className="flex justify-center">
        //     <button onClick={onClose} className="btn-ok">Submit</button>
        //   </div>
        // );
      case 'success':
        return null;  // Success message will auto-close, no footer
      default:
        return (
          <div className="flex justify-center">
            <button onClick={onClose} className="btn-ok">OK</button>
          </div>
        );
    }
  };

  // Styles for the dialog
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        className="bg-background text-text rounded-lg shadow-lg"
        style={{ minWidth: minWidth, maxWidth: maxWidth }}
      >
        <div className="bg-primary text-onPrimary dialog-header p-4 rounded-t-lg">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="dialog-body p-4">
          <p>{message}</p>
        </div>
        <div className="bg-box text-footerText dialog-footer p-4 rounded-b-lg">
          {renderFooter()}
        </div>
      </div>
    </div>
  );
};

export default Dialog;