import React from 'react';
import NavLink from './header/NavLinks';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="w-full bg-box text-text border-t border-border py-8 z-20 bg-slate-500">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-3 text-lightBlack">MyApp</h4>
          <p className="text-sm text-gray">Your go-to platform for awesome features. Built with 💻 and ☕.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3 text-lightBlack">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <NavLink variant="footer" className="block" />
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3 text-lightBlack">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-black transition">🌐</a>
            <a href="#" className="hover:text-secondaryHover transition">📸</a>
            <a href="#" className="hover:text-primary transition">🐦</a>
          </div>
        </div>
      </Container>
      <div className="mt-8 text-center text-xs text-text text-lightGray">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;