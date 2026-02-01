import { Facebook, Instagram, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../assests/BUS (38).png'; // Ensure path is correct

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity & Socials */}
          <div className="space-y-8">
            <div className="mb-6">
              <img src={Logo} alt="Astra Interior" className="h-20 w-auto brightness-0 invert" />
            </div>
            <p className="text-stone-400 leading-relaxed font-light italic text-lg">
              "Crafting timeless sanctuaries where architectural precision meets the soul of modern living."
            </p>
            <div className="flex space-x-5">
              <a
                href="https://www.instagram.com/astra_.interior/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#A68A64] transition-all duration-500"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61562835308067"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#A68A64] transition-all duration-500"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-8">
            <h4 className="text-[#A68A64] font-serif font-bold text-xl tracking-tight">Contact Studio</h4>
            <div className="space-y-6">
              <a href="tel:+919345445898" className="flex items-center space-x-4 text-stone-400 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 text-[#A68A64]" />
                <span className="text-sm font-light">+91 93454 45898</span>
              </a>
              <a href="mailto:astrainterior83@gmail.com" className="flex items-center space-x-4 text-stone-400 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 text-[#A68A64]" />
                <span className="text-sm font-light">astrainterior83@gmail.com</span>
              </a>
              <div className="flex items-start space-x-4 text-stone-400">
                <MapPin className="w-5 h-5 text-[#A68A64] shrink-0" />
                <span className="text-sm font-light">Race Course, Coimbatore,<br />Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Studio Navigation */}
          <div>
            <h4 className="text-[#A68A64] font-serif font-bold mb-8 text-xl tracking-tight">The Studio</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Astra', path: '/about' },
                { name: 'Our Portfolio', path: '/port' },
                { name: 'Design Journal', path: '/blog' },
                { name: 'Private Inquiry', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} className="text-stone-400 hover:text-[#A68A64] transition-all flex items-center group text-sm uppercase tracking-widest font-medium">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#A68A64] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Exclusive Access */}
          <div className="bg-[#36271C] p-8 border border-stone-800">
            <h4 className="text-white font-serif font-bold mb-4 text-xl">The Newsletter</h4>
            <p className="text-stone-400 mb-8 text-sm font-light leading-relaxed">
              Subscribe for seasonal design catalogs and bespoke furniture releases.
            </p>
            <div className="relative flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-0 py-3 bg-transparent border-b border-stone-700 text-white placeholder-stone-600 focus:outline-none focus:border-[#A68A64] transition-colors"
              />
              <button className="flex items-center justify-between w-full py-4 bg-[#A68A64] text-white px-6 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#8E7350] transition-all group">
                Join Circle <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <p className="text-stone-500 text-[10px] uppercase tracking-[0.4em] font-bold">
                © {currentYear} Astra Interior Design Studio
              </p>
              <p className="text-stone-600 text-[9px] uppercase tracking-widest">
                Handcrafted Excellence in Coimbatore.
              </p>
            </div>
            
            <div className="flex space-x-10">
              {['Privacy', 'Terms', 'Shipping'].map((link) => (
                <a key={link} href="/contact" className="text-stone-500 hover:text-[#A68A64] text-[10px] uppercase tracking-widest transition-colors font-bold">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* LARGE BACKGROUND DECOR */}
      <div className="absolute -bottom-10 left-10 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[15vw] font-serif leading-none text-white tracking-tighter">ASTRA</h2>
      </div>
    </footer>
  );
}