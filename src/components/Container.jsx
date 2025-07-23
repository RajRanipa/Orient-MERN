import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils/cn';

const maxWidthMap = {
  '3xl': 'max-w-3xl',
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
  'screen-xl': 'max-w-screen-xl',
};

const Container = ({
  children,
  as: Tag = 'section',
  className = '',
  childClassName = '',
  bg = '',
  padding = false,
  id='',
}) => {
  return (
    <Tag className={cn('w-full @container', bg, className)} id={id}>
      <div
        className={cn( 
          'mx-auto overflow-hidden',
          'px-[10px] w-full',              // base mobile
          'sm:px-[15px] text-[12px] sm:text-[14px] ',           // >=640px
          'md:px-[20px] md:text-[16px]',           // >=768px
          'lg:px-[25px] lg:text-[18px]',           // >=1024px
          'xl:px-[30px] ',           // >=1280px
          'max-w-full',             // fallback
          'md:max-w-lg',            // 960px
          'lg:max-w-xl',            // 1200px
          'xl:max-w-2xl',           // 1400px
          childClassName,
        )}
      >
        <div className={cn(padding && 'p-[2rem_1rem] sm:p-[3rem_2rem]','w-full')}>
          {children}
        </div>
      </div>
    </Tag>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string, // e.g. 'div', 'section'
  max: PropTypes.oneOf(Object.keys(maxWidthMap)),
  className: PropTypes.string,
  bg: PropTypes.string,
  padding: PropTypes.bool,
  centered: PropTypes.bool,
};

export default Container;