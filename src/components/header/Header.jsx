// File: components/Header.jsx

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import NavLinkCustom from './NavLinks';
import LogInOut from '../LogInOut';
import MobileMenu from './MobileMenu';
import '../header.css';
import ResponsiveImage from '../ResponsiveImage';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // useEffect(() => {

  //   let logo_height = getComputedStyle(document.documentElement).getPropertyValue('--logo-wrraper-height');
  //   logo_height = parseFloat(logo_height); // Removes "px" and converts to number
  //   let logo_height_Value = parseFloat(logo_height) * 2;

  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }

  //     var scrolledY = window.scrollY * 0.125;
  //     const min_height = logo_height;
  //     var x = 2;
  //     var new_logo_height = logo_height_Value - (scrolledY * x) >= min_height ? logo_height_Value - (scrolledY * x) + "px" : min_height + "px"

  //     document.querySelector('.logo-wrraper').style.setProperty('--logo-height', new_logo_height);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    const isProductPage = location.pathname.includes('/ceramic-fiber') // or your correct path

    const logo_height = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--logo-wrraper-height'));
    const logo_height_Value = logo_height * 2;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrolledY = window.scrollY * 0.125;
      const min_height = logo_height;
      const x = 2;

      const new_logo_height = logo_height_Value - (scrolledY * x) >= min_height
        ? logo_height_Value - (scrolledY * x) + 'px'
        : min_height + 'px';

      document.querySelector('.logo-wrraper')?.style.setProperty('--logo-height', new_logo_height);
    };

    // 👉 If on Product page, force static logo height and skip scroll
    if (isProductPage) {
      document.querySelector('.logo-wrraper')?.style.setProperty('--logo-height', logo_height+"px");
      return; // 🚫 Exit early
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // re-run when route changes

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const blurValue = Math.min(20, scrollY / 6); // 0 to 300px scroll → 0 to 50 blur
  document.documentElement.style.setProperty('--header-blur', `${blurValue}px`);
  return (
    <header
      className={`header-wrraper w-full top-0 z-50 fixed 
        ${scrollY > 0 ? 'bg-[rgba(255,255,255,0)]' : 'bg-transparent border-transparent'
        }`}
      id='navHeader'
    >
      <Container className='py-[0.5em] overflow-visible' childClassName="overflow-visible">
        <div className="flex items-center justify-between h-auto">
          {/* Logo */}
          <NavLink href="/" className="logo-wrraper">
            <div className="logo">
              <ResponsiveImage folder='home' name='brand-logo' alt="logo" />
            </div>
            <div className="comapny-name">
              <ResponsiveImage folder='home' name='text-logo' alt="Orient Ceramic Fibertech LLP" />
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            <NavLinkCustom />
            <li><LogInOut className='text-[var(--h-color)]' /></li>
            {/* <ThemeToggle /> */}
          </ul>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="relative w-8 h-8"
            >
              {/* <AnimatePresence mode="wait" initial={false}> */}
              <span
                key={menuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, scale: 0.8, rotate: menuOpen ? -90 : 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: menuOpen ? 90 : -90 }}
                transition={{ duration: 0.25 }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              >
                {/* {menuOpen ? <FaTimes className="text-2xl font-light text-[var(--h-color)]" /> : <FaBars className="text-2xl font-light text-[var(--h-color)]" />} */}
                {menuOpen ?
                  <svg style={{ color: 'var(--h-color)' }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                  :
                  <svg style={{ color: 'var(--h-color)' }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>}
              </span>
              {/* </AnimatePresence> */}
            </button>
          </div>
        </div>
      </Container>
      {menuOpen && <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} blurValue={blurValue} />}
    </header>
  );
};

export default Header;
