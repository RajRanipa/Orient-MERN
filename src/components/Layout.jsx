import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

const Layout = ({ title,background, children,parantclass, variant = 'default', className = '' }) => {
  const widthMap = {
    default: 'max-w-7xl',
    full: 'max-w-full',
    narrow: 'max-w-3xl',
  };

  return (
    <main className={`min-h-screen text-text py-10 ${className}`}>
      <Container className={`${parantclass || ''} ${widthMap[variant] || widthMap.default} space-y-6`} background={background}>
        {title && (
          <h1 className="text-2xl font-bold tracking-tight text-primary">
            {title}
          </h1>
        )}        
          {children}
      </Container>
    </main>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'full', 'narrow']),
  className: PropTypes.string,
};

export default Layout;
