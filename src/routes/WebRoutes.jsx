import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import PageTransition from '../components/PageTransition';
import WebLayout from '../layouts/WebLayout';
import Board from '../pages/products/Board';
import Bulk from '../pages/products/Bulk';
import Module from '../pages/products/Module';
import Paper from '../pages/products/Paper';
import Blanket from '../pages/products/Blanket';
import Certificate from '../components/Certificate';
// import { lazy, Suspense } from "react";
// const Products = lazy(() => import("../pages/web/Products"));

const WebRoutes = () => {
  return (
    <Routes>
      {/* Public pages */}
      <Route element={<WebLayout />}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/products/ceramic-fiber-blanket" element={<PageTransition><Blanket /></PageTransition>} />
        <Route path="/products/ceramic-fiber-board" element={<PageTransition><Board /></PageTransition>} />
        <Route path="/products/ceramic-fiber-bulk" element={<PageTransition><Bulk /></PageTransition>} />
        <Route path="/products/ceramic-fiber-module" element={<PageTransition><Module /></PageTransition>} />
        <Route path="/products/ceramic-fiber-paper" element={<PageTransition><Paper /></PageTransition>} />
        <Route path="/career" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/certificates" element={<PageTransition><Certificate /></PageTransition>} />
      </Route>
      {/* <Route element={<AuthLayout />}>
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
      </Route> */}
    </Routes>
  );
};

export default WebRoutes;
