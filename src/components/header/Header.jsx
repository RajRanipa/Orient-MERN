// File: components/Header.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Container from '../Container';
import NavLink from './NavLinks';
import LogInOut from '../LogInOut';
import MobileMenu from './MobileMenu';
import '../header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    let logo_height = getComputedStyle(document.documentElement).getPropertyValue('--logo-wrraper-height');
    logo_height = parseFloat(logo_height); // Removes "px" and converts to number
    let logo_height_Value = parseFloat(logo_height) * 2;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      var scrolledY = window.scrollY * 0.125;
      const min_height = logo_height;
      var x = 2;
      var new_logo_height = logo_height_Value - (scrolledY * x) >= min_height ? logo_height_Value - (scrolledY * x) + "px" : min_height + "px"

      document.querySelector('.logo-wrraper').style.setProperty('--logo-height', new_logo_height);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <a href="/" className="logo-wrraper">
            <div className="logo">
                <img src="/front-image/o-brand-logo.png" alt="logo" loading="lazy" />
            </div>
            <div className="comapny-name">
              <img src="/front-image/o-text-logo.png" alt="Orient Ceramic Fibertech LLP" />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink />
            <LogInOut className='text-[var(--h-color)]' />
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="relative w-8 h-8"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, scale: 0.8, rotate: menuOpen ? -90 : 90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: menuOpen ? 90 : -90 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                >
                  {menuOpen ? <FaTimes className="text-2xl font-light text-[var(--h-color)]" /> : <FaBars className="text-2xl font-light text-[var(--h-color)]" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </Container>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} blurValue={blurValue} />
    </header>
  );
};

export default Header;
