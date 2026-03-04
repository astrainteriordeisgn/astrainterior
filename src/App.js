import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Whatsapp from './components/whatsapp';
import ScrollToTop from './components/scrolltotop'; // Scroll logic
import Scrollup from './components/scrollup';     // The UI button

// Lazy load page-level components
const Homepage = lazy(() => import('./components/Homepage'));
const Aboutus = lazy(() => import('./components/pages/Aboutus'));
const Contactus = lazy(() => import('./components/pages/Contactus'));
const BlogSectionClassic = lazy(() => import('./components/pages/Blog'));
const PortfolioPage = lazy(() => import('./components/pages/portfolio'));
const Services = lazy(() => import('./components/Services'));
const ThankYou = lazy(() => import('./components/Thankyoupage'));

// Branded Astra Spinner
const PageLoader = () => (
  <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C1E14' }}>
    <div className="w-12 h-12 border-4 border-[#A68A64]/20 border-t-[#A68A64] rounded-full animate-spin mb-4"></div>
    <div style={{ color: '#fff', fontFamily: 'Playfair Display', letterSpacing: '0.2em', fontSize: '12px' }}>ASTRA</div>
  </div>
);

function App() {
  return (
    <Router>
      {/* 1. Logic & Global UI elements */}
      <ScrollToTop /> 
      <Navigation />
      <Whatsapp />
      <Scrollup />  
      
      {/* 2. FIX: Document Landmark - wrapping routes in <main> for Accessibility & SEO */}
      <main id="main-content" role="main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/blog" element={<BlogSectionClassic />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/port" element={<PortfolioPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;