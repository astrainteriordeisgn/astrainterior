import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import BlogSectionClassic from './components/pages/Blog';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PortfolioPage from './components/portfolio';
import Services from './components/Services';
import Whatsapp from './components/whatsapp';
import ScrollToTop from './components/scrolltotop';
import Scrollup from './components/scrollup';
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
         <Route path="/contact" element={<Contactus />} />
         <Route path="/port" element={<PortfolioPage />} />
         <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
