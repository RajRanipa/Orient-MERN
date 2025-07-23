import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';
import Atag from '../Atag';
import { useLocation } from 'react-router-dom';

export const navLinks = [
  { name: 'Home', href: '/', showInFooter: true },
  { name: 'About', href: '/#about_us', showInFooter: true },
  { name: 'Products', href: '/products/ceramic-fiber-blanket', showInFooter: true },
  { name: 'Career', href: '/Career', showInFooter: true },
  { name: 'Contact', href: '/Contact', showInFooter: true },
];


const NavLink = ({
  variant = 'header',
  className = '',
  icon = null,
  onClick = () => {},
}) => {
  const location = useLocation();
  

  const baseStyles = 'transition duration-200';
  const variantStyles = {
    header: 'hover:text-brand-main',
    footer: 'hover:text-brand-main',
  };

  return (
    <>
      {navLinks.map(({ name, href, showInFooter, onClickCustom }) => {
        if (variant === 'footer' && !showInFooter) return null;

        const isActive = location.pathname === href;

        return (
          <Atag
            key={name}
            linkname={name.toLowerCase()}
            href={href}
            onClick={onClick}
            id={"navlink_"+name.toLowerCase()}
            className={cn("text-[var(--h-color)]",
              baseStyles,
              variantStyles[variant],
              isActive && 'font-semibold',
              className
            )}
          >
            {icon && <span className="mr-1">{icon}</span>}
          </Atag>
        );
      })}
    </>
  );
};

NavLink.propTypes = {
  variant: PropTypes.oneOf(['header', 'footer']),
  className: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default NavLink;