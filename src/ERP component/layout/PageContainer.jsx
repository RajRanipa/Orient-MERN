import React from 'react';

const PageContainer = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full h-full overflow-y-auto px-6 py-4 bg-bg-background text-text-D-dark ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
