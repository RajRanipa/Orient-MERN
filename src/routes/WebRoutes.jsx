import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import PageTransition from '../components/PageTransition';
import WebLayout from '../layouts/WebLayout';
import Certificate from '../components/Certificate';
import { lazy, Suspense } from "react";
import Loading from '../components/Loading';
const Blanket = lazy(() => import("../pages/products/Blanket"));
// import Blanket from "../pages/products/Blanket"
const Board = lazy(() => import('../pages/products/Board'));
// import Board from '../pages/products/Board'
const Bulk = lazy(() => import('../pages/products/Bulk'));
// import Bulk from '../pages/products/Bulk'
const Module = lazy(() => import('../pages/products/Module'));
// import Module from '../pages/products/Module'
const Paper = lazy(() => import('../pages/products/Paper'));
// import Paper from '../pages/products/Paper'

const WebRoutes = () => {
  return (
    // Public pages 
    <Routes>
      <Route element={<WebLayout />}>
        <Route index path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/ceramic-fiber-blanket" element={
          <Suspense fallback={<Loading title={"Loading Blanket..."}/>}>
            <PageTransition><Blanket /></PageTransition>
          </Suspense>
        } />
        <Route path="/ceramic-fiber-board" element={
          <Suspense fallback={<Loading title={"Loading Board..."}/>}>
            <PageTransition><Board /></PageTransition>
          </Suspense>
        } />
        <Route path="/ceramic-fiber-bulk" element={
          <Suspense fallback={<Loading title={"Loading Bulk..."}/>}>
            <PageTransition><Bulk /></PageTransition>
          </Suspense>
        } />
        <Route path="/ceramic-fiber-module" element={
          <Suspense fallback={<Loading title={"Loading Module..."}/>}>
            <PageTransition><Module /></PageTransition>
          </Suspense>
        } />
        <Route path="/ceramic-fiber-paper" element={
          <Suspense fallback={<Loading title={"Loading Paper..."}/>}>
            <PageTransition><Paper /></PageTransition>
          </Suspense>
        } />
        <Route path="/ceramic-fiber-blanket" element={<PageTransition><Blanket /></PageTransition>} />
        <Route path="/ceramic-fiber-board" element={<PageTransition><Board /></PageTransition>} />
        <Route path="/ceramic-fiber-bulk" element={<PageTransition><Bulk /></PageTransition>} />
        <Route path="/ceramic-fiber-module" element={<PageTransition><Module /></PageTransition>} />
        <Route path="/ceramic-fiber-paper" element={<PageTransition><Paper /></PageTransition>} />
        <Route path="/career" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/certificates" element={<PageTransition><Certificate /></PageTransition>} />
      </Route>
    </Routes>
  );
};

export default WebRoutes;
