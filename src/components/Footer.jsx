// import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
// import { FiCheck, FiMail, FiMap, FiPhoneCall } from 'react-icons/fi';
import NavLinkCustom from './header/NavLinks';
import Container from './Container';
import Atag from './Atag';
import { cn } from '../utils/cn';
import ResponsiveImage from './ResponsiveImage';

const Footer = () => {
  const [copiedItem, setCopiedItem] = useState('');

  const phoneNumber = '+919825355877';
  const gmailID = 'orientfibertechllp@gmail.com';
  const address = '27 National Highway Near Railway Crossing Hasanpar Wankaner, Morbi – 363 621, Gujarat, India.'

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(''), 2000); // Reset after 2s
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer className="w-full text-text border-t border-border py-8 z-20 bg-[var(--cl-dark)]">
      <Container >
        <div className="mb-8 text-center text-xs text-gray-400">
          <Atag
            key={"back to top"}
            linkname={"back to top".toLowerCase()}
            href={"#top"}
            onClick={scrollToTop}
            id={"navlink_" + "back to top".toLowerCase()}
            className={cn(
              'transition duration-200',
            )}
          >
          </Atag>
        </div>
        <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-[1fr_0.6fr_1.12fr]">
          <div className="flex flex-col items-center text-center md:text-left md:items-start p-2 ">
            <div className='flex gap-1 items-center md:items-start'>
              <ResponsiveImage folder='home' name='brand-logo' alt="logo" className="w-auto h-12" />
              <ResponsiveImage folder='home' name='text-logo' alt="logo" className="w-auto h-12" />
            </div>
            <p className="py-4 pr-5 text-gray-300">
              At Orient Ceramic Fibertech LLP, we deliver high-performance ceramic fiber solutions trusted by industries worldwide. Our commitment to quality and innovation drives everything we do.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start p-2">
            <h2 className="text-lg font-semibold mb-3 text-gray-100">Quick Links</h2>
            <ul className="pt-2 flex flex-wrap gap-4 md:flex-col ">
              <NavLinkCustom variant="footer" className="block text-gray-300" />
            </ul>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start p-2">
            <h2 className="text-lg font-semibold mb-3 text-gray-100">Contact Us</h2>
            <div className="flex flex-col gap-2 text-gray-300 items-center md:items-start">
              <div className="flex flex-wrap items-center  gap-2 cursor-copy py-1"
                onClick={() => copyToClipboard(phoneNumber, 'phone')}
              >
                {/* <FiPhoneCall className='min-w-3 min-h-3' /> */}
                <img loading="lazy" src='/front-image/icon/phone_ring.svg' alt='mail' className='min-w-3 min-h-3 invert-[1]' />
                <div itemScope itemType="https://schema.org/Organization">
                  <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                    <span itemProp="telephone">
                      <a href={`tel:${phoneNumber}`} className="hover:underline">
                        {phoneNumber}
                      </a>
                    </span>
                  </div>
                </div>
                {copiedItem === 'phone' && (
                  <>
                    <p className="text-gray-400">Copied</p>
                    <svg className="text-green-500" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2 cursor-copy py-1"
                onClick={() => copyToClipboard(gmailID, 'email')}
              >
                {/* <FiMail className='min-w-3 min-h-3' /> */}
                <img loading="lazy" src='/front-image/icon/mail.svg' alt='mail' className='min-w-3 min-h-3  invert-[1]' />
                <div itemScope itemType="https://schema.org/Organization">
                  <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                    <span itemProp="email">
                      <a href={`mailto:${gmailID}`} className="hover:underline">
                        {gmailID}
                      </a>
                    </span>
                  </div>
                </div>
                {copiedItem === 'email' && (
                  <>
                    <p className="text-gray-400">Copied</p>
                    {/* <FiCheck className="text-green-500" /> */}
                    <svg className="text-green-500" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </>
                )}
              </div>
              <div className="flex items-start gap-2 cursor-copy py-1 self-center w-full"
                onClick={() => copyToClipboard(address, 'address')}
              >
                {/* <FiMap className='md:mt-[5px] min-w-3 min-h-3 flex-[0_0]' /> */}
                <img loading="lazy" src='/front-image/icon/map.svg' alt='mail' className='md:mt-[5px] min-w-3 min-h-3 invert-[1]' />
                <div itemScope itemType="https://schema.org/Organization" className='lg:flex-[0_0_50%] md:flex-[0_0_60%]'>
                  <div itemProp="addressPoint" itemScope itemType="https://schema.org/addressPoint">
                    <span itemProp="address">
                      <a href="https://maps.app.goo.gl/4RLM1eWvzkdxZeCf8" target="_blank" rel="noopener noreferrer" className=" hover:underline w-full">
                        {address}
                      </a>
                    </span>
                  </div>
                </div>
                {copiedItem === 'address' && (
                  <>
                    <p className="text-gray-400">Copied</p>
                    {/* <FiCheck className="text-green-500 mt-[2px] min-w-3 min-h-3 " /> */}
                    <svg className="text-green-500 mt-[2px] min-w-3 min-h-3" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-text text-gray-400">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;