import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mail, Phone, X, Menu, ArrowRight } from "lucide-react";
import logo from "../assests/BUS (38).png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    // NEW: Handle screen resizing to close menu when moving to desktop view
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px is the 'lg' breakpoint in Tailwind
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Studio", path: "/about" },
    { name: "Work", path: "/port" },
    { name: "Journal", path: "/blog" },
    { name: "Contact", path: "/contactus" },
  ];

  const activeStyle = "text-[#A68A64] after:w-full";
  const idleStyle = "text-[#2C1E14] hover:text-[#A68A64] after:w-0 hover:after:w-full";

  return (
    <>
      {/* --- HEADER --- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg py-3 shadow-sm border-b border-stone-100"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center space-x-3"
          >
            <div className="relative overflow-hidden rounded-full transition-transform duration-500 group-hover:rotate-12">
              <img src={logo} alt="Astra Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl tracking-[0.2em] text-[#2C1E14] leading-none">
                ASTRA
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-stone-500 mt-1">INTERIOR</span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#A68A64] after:transition-all after:duration-500
                  ${isActive ? activeStyle : idleStyle}
                `}
              >
                {link.name}
              </NavLink>
            ))}
            
            <Link 
              to="/contactus" 
              className="ml-4 px-6 py-3 bg-[#2C1E14] text-white text-[11px] uppercase tracking-widest hover:bg-[#A68A64] transition-colors duration-300"
            >
              Inquire
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex items-center space-x-2 p-2 group"
            aria-label="Open Menu"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2C1E14]">Menu</span>
            <Menu className="w-5 h-5 text-[#2C1E14] group-hover:text-[#A68A64] transition-colors" />
          </button>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)} // This closes the nav when clicking the background
      />

      {/* --- MOBILE SIDEBAR PANEL --- */}
      <aside
        className={`fixed top-0 right-0 w-[85%] max-w-[400px] h-full bg-stone-50 z-[70] shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-8 py-8 border-b border-stone-200">
          <span className="font-serif text-sm tracking-widest uppercase">Navigation</span>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:rotate-90 transition-transform duration-300">
            <X className="w-6 h-6 text-[#2C1E14]" />
          </button>
        </div>

        <nav className="flex-grow flex flex-col justify-center px-12 space-y-8">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                group flex items-center justify-between text-2xl font-serif transition-all duration-300
                ${isActive ? "text-[#A68A64] pl-4" : "text-[#2C1E14] hover:text-[#A68A64] hover:pl-4"}
              `}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span>{link.name}</span>
              <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0`} />
            </NavLink>
          ))}
        </nav>

        <div className="p-12 bg-white border-t border-stone-100 space-y-6">
          <div className="space-y-4">
            <a href="mailto:astrainterior83@gmail.com" className="flex items-center space-x-3 text-sm text-stone-600 hover:text-[#A68A64] transition-colors">
              <Mail className="w-4 h-4" />
              <span>astrainterior83@gmail.com</span>
            </a>
            <a href="tel:+919345445898" className="flex items-center space-x-3 text-sm text-stone-600 hover:text-[#A68A64] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 93454 45898</span>
            </a>
          </div>
          <div className="pt-4 flex space-x-6">
            {['Instagram'].map(social => (
              <span key={social} className="text-[10px] uppercase tracking-tighter text-stone-400 cursor-pointer hover:text-[#2C1E14]">
                {social}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}