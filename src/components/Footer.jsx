import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { FiCheck, FiMail, FiMap, FiMapPin, FiPhone, FiPhoneCall } from 'react-icons/fi';
import NavLinkCustom from './header/NavLinks';
import Container from './Container';
import Atag from './Atag';
import { cn } from '../utils/cn';

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
        <div className="mb-8 text-center text-xs text-gray-500">
          <Atag
            key={"back to top"}
            linkname={"back to top".toLowerCase()}
            href={"#top"}
            onClick={scrollToTop}
            id={"navlink_"+"back to top".toLowerCase()}
            className={cn(
              'transition duration-200',
            )}
          >
          </Atag>
        </div>
        <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-[1fr_0.6fr_1.12fr]">
          <div className="flex flex-col items-center text-center md:text-left md:items-start p-2 ">
            <div className='flex gap-1 items-center md:items-start'>
              <img src='./front-image/o-brand-logo.png' className='w-auto h-12' alt='logo' />
              <img src='./front-image/o-text-logo.png' className='w-auto h-12' alt='logo' />
            </div>
            <p className="py-4 text-gray-300">Your go-to platform for awesome features. Built with 💻 and ☕.</p>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start p-2">
            <h4 className="text-lg font-semibold mb-3 text-gray-100">Quick Links</h4>
            <ul className="pt-2 flex flex-wrap gap-4 md:flex-col ">
              <NavLinkCustom variant="footer" className="block text-gray-300" />
            </ul>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start p-2">
            <h4 className="text-lg font-semibold mb-3 text-gray-100">Contact Us</h4>
            <div className="flex flex-col gap-2 text-gray-300 items-center md:items-start">
              <div className="flex flex-wrap items-center  gap-2 cursor-copy py-1"
                onClick={() => copyToClipboard(phoneNumber, 'phone')}
              >
                <FiPhoneCall className='min-w-3 min-h-3' />
                <div itemScope itemType="https://schema.org/Organization">
                  <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                    <span itemProp="telephone">
                      <a className="hover:underline">
                        {phoneNumber}
                      </a>
                    </span>
                  </div>
                </div>
                {copiedItem === 'phone' && (
                  <>
                    <p className="text-gray-400">Copied</p>
                    <FiCheck className="text-green-500" />
                  </>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2 cursor-copy py-1"
                onClick={() => copyToClipboard(gmailID, 'email')}
              >
                <FiMail className='min-w-3 min-h-3' />
                <div itemScope itemType="https://schema.org/Organization">
                  <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                    <span itemProp="telephone">
                      <a className=" hover:underline">
                        {gmailID}
                      </a>
                    </span>
                  </div>
                </div>
                {copiedItem === 'email' && (
                  <>
                    <p className="text-gray-400">Copied</p>
                    <FiCheck className="text-green-500" />
                  </>
                )}
              </div>
              <div className="flex items-start gap-2 cursor-copy py-1 self-center w-full"
                onClick={() => copyToClipboard(address, 'address')}
              >
                <FiMap className='md:mt-[5px] min-w-3 min-h-3 flex-[0_0]' />
                <div itemScope itemType="https://schema.org/Organization" className='lg:flex-[0_0_50%] md:flex-[0_0_60%]'>
                  <div itemProp="addressPoint" itemScope itemType="https://schema.org/addressPoint">
                    <span itemProp="address">
                      <a className=" hover:underline w-full">
                        {address}
                      </a>
                    </span>
                  </div>
                </div>
                {copiedItem === 'address' && (
                  <>
                    <p className="text-gray-400">Copied</p>
                    <FiCheck className="text-green-500 mt-[2px] min-w-3 min-h-3 " />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-text text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;