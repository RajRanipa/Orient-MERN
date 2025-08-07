import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import PageTransition from '../components/PageTransition';
import WebLayout from '../layouts/WebLayout';
import Certificate from '../components/Certificate';
import { lazy, Suspense } from "react";
const Blanket = lazy(() => import("../pages/products/Blanket"));
const Board = lazy(() => import('../pages/products/Board'));
const Bulk = lazy(() => import('../pages/products/Bulk'));
const Module = lazy(() => import('../pages/products/Module'));
const Paper = lazy(() => import('../pages/products/Paper'));

const WebRoutes = () => {
  return (
      // Public pages 
      <Routes element={<WebLayout />}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/products/ceramic-fiber-blanket" element={
          <Suspense fallback={<div>Loading Blanket...</div>}>
            <PageTransition><Blanket /></PageTransition>
          </Suspense>
        } />
        <Route path="/products/ceramic-fiber-board" element={
          <Suspense fallback={<div>Loading Blanket...</div>}>
            <PageTransition><Board /></PageTransition>
          </Suspense>
        } />
        <Route path="/products/ceramic-fiber-bulk" element={
          <Suspense fallback={<div>Loading Blanket...</div>}>
            <PageTransition><Bulk /></PageTransition>
          </Suspense>
        } />
        <Route path="/products/ceramic-fiber-module" element={
          <Suspense fallback={<div>Loading Blanket...</div>}>
            <PageTransition><Module /></PageTransition>
          </Suspense>
        } />
        <Route path="/products/ceramic-fiber-paper" element={
          <Suspense fallback={<div>Loading Blanket...</div>}>
            <PageTransition><Paper /></PageTransition>
          </Suspense>
        } />
        {/* <Route path="/products/ceramic-fiber-board" element={<PageTransition><Board /></PageTransition>} />
        <Route path="/products/ceramic-fiber-bulk" element={<PageTransition><Bulk /></PageTransition>} />
        <Route path="/products/ceramic-fiber-module" element={<PageTransition><Module /></PageTransition>} />
        <Route path="/products/ceramic-fiber-paper" element={<PageTransition><Paper /></PageTransition>} /> */}
        <Route path="/career" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/certificates" element={<PageTransition><Certificate /></PageTransition>} />
      </Routes>
  );
};

export default WebRoutes;
