// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';       // ← add these
import { motion, useScroll } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@/components/theme-provider';
import './index.css';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import ProductSection from './components/pages/ProductSection';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Aboutus from './components/pages/Aboutus';
import Checker from './components/pages/Checker';
import Contactus from './components/pages/Contactus';


function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.classList.add('has-scroll-smooth');
    return () => {
      document.documentElement.classList.remove('has-scroll-smooth');
    };
  }, []);

  const defaultTitle = "Navbharat Niwas";
  const defaultDescription = "Navbharat Niwas: Leading Contruction and Real Estate Company in India, specializing in Plot Sales, Construction, and Real Estate Development. Explore our innovative solutions for your construction needs.";
  const siteUrl = "https://navbharatniwas.in/";

  return (
    <HelmetProvider>
      <BrowserRouter> {/* ← wrap with your Router */}
        <Helmet htmlAttributes={{ lang: 'en-IN' }}>
          <title>{defaultTitle}</title>
          <meta name="description" content={defaultDescription} />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={siteUrl} />
          {/* …other meta tags… */}
        </Helmet>

        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          {/* scroll progress bar */}
          <motion.div
            className="scroll-progress-bar"
            style={{ scaleX: scrollYProgress }}
          />

          <main>
            <Header/>
              <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductSection />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/checker" element={<Checker />} />
            <Route path="/contact" element={<Contactus />} />

            <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;
