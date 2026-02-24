import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import BlogSectionClassic from './components/pages/Blog';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PortfolioPage from './components/pages/portfolio';
import Services from './components/Services';
import Whatsapp from './components/whatsapp';
import ScrollToTop from './components/scrolltotop';
import Scrollup from './components/scrollup';

// ADD THIS LINE HERE
import ThankYou from './components/Thankyoupage'; 

function App() {
  return (
    <Router>
      <Navigation />
      <Whatsapp />
      <ScrollToTop />
      <Scrollup />  
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blog" element={<BlogSectionClassic />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/port" element={<PortfolioPage />} />
        <Route path="/services" element={<Services />} />
        
        {/* ADD THIS ROUTE HERE */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;