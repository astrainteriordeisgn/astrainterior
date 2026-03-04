import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Keeping layout components synchronous for immediate UI shell rendering
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Whatsapp from './components/whatsapp';
import ScrollToTop from './components/scrolltotop';
import Scrollup from './components/scrollup';

// Lazy load page-level components
const Homepage = lazy(() => import('./components/Homepage'));
const Aboutus = lazy(() => import('./components/pages/Aboutus'));
const Contactus = lazy(() => import('./components/pages/Contactus'));
const BlogSectionClassic = lazy(() => import('./components/pages/Blog'));
const PortfolioPage = lazy(() => import('./components/pages/portfolio'));
const Services = lazy(() => import('./components/Services'));
const ThankYou = lazy(() => import('./components/Thankyoupage'));

// Simple loading fallback (you can replace this with a branded Astra spinner)
const PageLoader = () => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C1E14' }}>
    <div style={{ color: '#fff', fontFamily: 'Playfair Display' }}>Loading Astra...</div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Whatsapp />
      <Scrollup />  
      
      {/* Suspense handles the loading state while the lazy component is being fetched */}
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
      
      <Footer />
    </Router>
  );
}

export default App;