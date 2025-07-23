import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/web/Home';
import Products from '../pages/web/Products';
import Careers from '../pages/web/Careers';
import Contact from '../pages/web/Contact';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import PageTransition from '../components/PageTransition';
import WebLayout from '../layouts/WebLayout';
import AuthLayout from '../layouts/AuthLayout';
import Board from '../components/products/Board';
import Bulk from '../components/products/Bulk';
import Module from '../components/products/Module';
import Paper from '../components/products/Paper';
import Blanket from '../components/products/Blanket';
import { ScrollObserverProvider } from '../context/ScrollObserverContext';

const WebRoutes = () => {
  return (
    // <ScrollObserverProvider>
      <Routes>
        {/* Public pages */}
        <Route element={<WebLayout />}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          {/* <Route path="/products" element={<PageTransition><Products /></PageTransition>} /> */}
          <Route path="/products/*" element={<Products />}>
            <Route index element={<PageTransition><Blanket /></PageTransition>} />
            <Route path="ceramic-fiber-blanket" element={<PageTransition><Blanket /></PageTransition>} />
            <Route path="ceramic-fiber-board" element={<PageTransition><Board /></PageTransition>} />
            <Route path="ceramic-fiber-bulk" element={<PageTransition><Bulk /></PageTransition>} />
            <Route path="ceramic-fiber-module" element={<PageTransition><Module /></PageTransition>} />
            <Route path="ceramic-fiber-paper" element={<PageTransition><Paper /></PageTransition>} />
          </Route>
          <Route path="/career" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
        </Route>
      </Routes>
    // </ScrollObserverProvider>
  );
};

export default WebRoutes;
