import React, { useState, useEffect, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mail, Phone, X, Menu, ArrowRight } from "lucide-react";
import logo from "../assests/BUS (38).png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. High-Performance Scroll Observer
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 10; // Lower threshold for faster feedback
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 2. Mobile Viewport & Scroll Locking
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.touchAction = "auto";
    };
  }, [isOpen]);

  const navLinks = useMemo(() => [
    { name: "Home", path: "/" },
    { name: "The Studio", path: "/about" },
    { name: "Work", path: "/port" },
    { name: "Journal", path: "/blog" },
    { name: "Contact", path: "/contactus" },
  ], []);

  return (
    <>
      {/* HEADER: Added transform-gpu to offload transition to the GPU */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform-gpu will-change-[padding,background-color] ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-stone-100"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LOGO: The LCP Target */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center space-x-3"
          >
            <div className="relative overflow-hidden rounded-full">
              <img 
                src={logo} 
                alt="Astra Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
                loading="eager" // Do NOT lazy load branding
                fetchPriority="high" // Critical for lowering that 2,330ms delay
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl tracking-[0.2em] text-[#2C1E14] leading-none">
                ASTRA
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-stone-500 mt-1">INTERIOR</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  relative py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#A68A64] after:transition-all after:duration-500
                  ${isActive ? "text-[#A68A64] after:w-full" : "text-[#2C1E14] hover:text-[#A68A64] after:w-0 hover:after:w-full"}
                `}
              >
                {link.name}
              </NavLink>
            ))}
            
            <Link 
              to="/contactus" 
              className="ml-4 px-6 py-3 bg-[#2C1E14] text-white text-[11px] uppercase tracking-widest hover:bg-[#A68A64] transition-all duration-300"
            >
              Inquire
            </Link>
          </nav>

          {/* MOBILE TOGGLE: Optimized hit-box */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex items-center space-x-2 p-3 -mr-3"
            aria-label="Open Menu"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2C1E14]">Menu</span>
            <Menu className="w-6 h-6 text-[#2C1E14]" />
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* SIDEBAR: Using dvh for mobile browser bar compatibility */}
      <aside
        className={`fixed top-0 right-0 w-[85%] max-w-[400px] h-[100dvh] bg-[#FAF9F6] z-[70] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-8 py-8 border-b border-stone-100">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">Navigation</span>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:rotate-90 transition-transform">
            <X className="w-6 h-6 text-[#2C1E14]" />
          </button>
        </div>

        <nav className="flex-grow flex flex-col justify-center px-10 space-y-6">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                group flex items-center justify-between text-3xl font-serif transition-all duration-500
                ${isActive ? "text-[#A68A64] translate-x-2" : "text-[#2C1E14] hover:text-[#A68A64] hover:translate-x-2"}
              `}
              style={{ transitionDelay: isOpen ? `${idx * 50}ms` : '0ms' }}
            >
              <span>{link.name}</span>
              <ArrowRight className={`w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0`} />
            </NavLink>
          ))}
        </nav>

        <div className="p-10 bg-white border-t border-stone-100 space-y-6">
          <div className="flex flex-col space-y-3">
            <a href="mailto:astrainterior83@gmail.com" className="flex items-center space-x-3 text-xs tracking-wide text-stone-600">
              <Mail className="w-4 h-4 text-[#A68A64]" />
              <span>astrainterior83@gmail.com</span>
            </a>
            <a href="tel:+919345445898" className="flex items-center space-x-3 text-xs tracking-wide text-stone-600">
              <Phone className="w-4 h-4 text-[#A68A64]" />
              <span>+91 93454 45898</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}