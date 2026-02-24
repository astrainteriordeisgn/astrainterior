import { Link } from 'react-router-dom'; // Using Link for smoother navigation
import { Facebook, Instagram, ArrowRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Logo from '../assests/BUS (38).png'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919345445898";

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <footer className="relative bg-[#2C1E14] overflow-hidden">
      {/* SVG BACKGROUND: TEXTILE WEAVE PATTERN */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-weave" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L40 20 M20 0 L20 40" fill="none" stroke="#FAF9F6" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-weave)" />
        </svg>
      </div>

      {/* Reduced py-24 to py-16 to shrink overall height */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 py-16">
        {/* Reduced gap-16 to gap-8 and mb-20 to mb-12 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Identity & Socials */}
          <div className="space-y-6"> {/* Reduced space-y-8 to 6 */}
            <div className="mb-4"> {/* Reduced mb-6 to 4 */}
              <Link to="/">
                <img src={Logo} alt="Astra Interior" className="h-16 w-auto brightness-0 invert" />
              </Link>
            </div>
            <p className="text-stone-400 leading-relaxed font-light italic text-base"> {/* Adjusted text-lg to base */}
              "Crafting timeless sanctuaries where architectural precision meets the soul of modern living."
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/astra_.interior/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#A68A64] transition-all duration-500"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61562835308067"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#A68A64] transition-all duration-500"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="w-4 h-4" />
              </a>
              <button
                onClick={handleWhatsAppRedirect}
                className="w-10 h-10 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-[#25D366] hover:border-[#25D366] transition-all duration-500"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-6">
            <h4 className="text-[#A68A64] font-serif font-bold text-lg tracking-tight">Contact Studio</h4>
            <div className="space-y-4"> {/* Reduced space-y-6 to 4 */}
              <a href="tel:+919345445898" className="flex items-center space-x-4 text-stone-400 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-[#A68A64]" />
                <span className="text-sm font-light">+91 93454 45898</span>
              </a>
              <a href="mailto:astrainterior83@gmail.com" className="flex items-center space-x-4 text-stone-400 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-[#A68A64]" />
                <span className="text-sm font-light">astrainterior83@gmail.com</span>
              </a>
              <div className="flex items-start space-x-4 text-stone-400">
                <MapPin className="w-4 h-4 text-[#A68A64] shrink-0" />
                <span className="text-sm font-light">Race Course, Coimbatore,<br />Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Studio Navigation */}
          <div>
            <h4 className="text-[#A68A64] font-serif font-bold mb-6 text-lg tracking-tight">The Studio</h4>
            <ul className="space-y-3"> {/* Reduced space-y-4 to 3 */}
              {[
                { name: 'About Astra', path: '/about' },
                { name: 'Our Portfolio', path: '/port' },
                { name: 'Services', path: '/services' },
                { name: 'Design Journal', path: '/blog' },
                { name: 'Private Inquiry', path: '/contactus' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-stone-400 hover:text-[#A68A64] transition-all flex items-center group text-[13px] uppercase tracking-widest font-medium">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#A68A64] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Exclusive Access */}
          <div className="bg-[#36271C] p-6 border border-stone-800 self-start"> {/* Reduced p-8 to 6 */}
            <h4 className="text-white font-serif font-bold mb-3 text-lg">Direct Inquiry</h4>
            <p className="text-stone-400 mb-6 text-sm font-light leading-relaxed">
              Skip the email. Chat directly with our design lead for immediate project consultations.
            </p>
            <div className="relative flex flex-col space-y-4">
              <button 
                onClick={handleWhatsAppRedirect}
                className="flex items-center justify-between w-full py-3.5 bg-[#A68A64] text-white px-6 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#8E7350] transition-all group"
              >
                Chat on WhatsApp <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8"> {/* Reduced pt-12 to 8 */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center lg:items-start space-y-1">
              <p className="text-stone-500 text-[10px] uppercase tracking-[0.4em] font-bold">
                © {currentYear} Astra Interior Design Studio
              </p>
              <p className="text-stone-600 text-[9px] uppercase tracking-widest">
                Handcrafted Excellence in Coimbatore.
              </p>
            </div>
            
            <div className="flex space-x-8"> {/* Reduced space-x-10 to 8 */}
              {['Privacy', 'Terms', 'Shipping'].map((link) => (
                <Link key={link} to="/contactus" className="text-stone-500 hover:text-[#A68A64] text-[10px] uppercase tracking-widest transition-colors font-bold">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* LARGE BACKGROUND DECOR */}
      <div className="absolute -bottom-6 left-10 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[12vw] font-serif leading-none text-white tracking-tighter">ASTRA</h2>
      </div>
    </footer>
  );
}