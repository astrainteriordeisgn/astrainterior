import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  ArrowRight,
  Mail,
  Phone,
  X,
} from "lucide-react";
import logo from "../assests/BUS (38).png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Studio", path: "/about" },
    { name: "Work", path: "/port" },
    { name: "Journal", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-700 pointer-events-none">
      
      {/* FLOATING HEADER BAR */}
      <div
        className={`max-w-[1600px] mx-auto px-4 md:px-12 flex justify-between items-center transition-all duration-700 pointer-events-auto ${
          scrolled
            ? "mt-4 md:mt-6 px-6 md:px-10 py-3 bg-[#FAF9F6]/80 backdrop-blur-xl border border-stone-200 rounded-full shadow-lg max-w-[95%] md:max-w-[800px]"
            : "mt-0 py-8 w-full"
        }`}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center space-x-3 z-[110]"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="Astra"
            className={`object-contain transition-all duration-500 ${
              scrolled ? "h-8 w-8" : "h-12 w-12"
            }`}
          />
          <span
            className={`font-serif tracking-tighter font-bold transition-all duration-500 ${
              scrolled ? "text-base" : "text-2xl"
            } text-[#2C1E14]`}
          >
            ASTRA{" "}
            <span
              className={`italic font-light text-[#A68A64] ${
                scrolled ? "hidden md:inline" : "inline"
              }`}
            >
              INTERIOR
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div
          className={`hidden md:flex items-center space-x-8 transition-all duration-500 ${
            scrolled
              ? "opacity-0 scale-90 pointer-events-none"
              : "opacity-100"
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[10px] uppercase tracking-[0.4em] font-bold transition-colors ${
                  isActive
                    ? "text-[#A68A64]"
                    : "text-[#2C1E14] hover:text-[#A68A64]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center space-x-4">
          <button
            className={`relative text-[#2C1E14] transition-all ${
              scrolled ? "p-1" : "p-2"
            }`}
          >
            <ShoppingBag className={scrolled ? "w-4 h-4" : "w-6 h-6"} />
            <span className="absolute top-0 right-0 bg-[#A68A64] text-white text-[7px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
              0
            </span>
          </button>

          {/* MENU TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center space-x-3 group px-4 py-2 transition-all duration-500 ${
              scrolled
                ? "bg-[#2C1E14] text-white rounded-full"
                : "text-[#2C1E14]"
            }`}
          >
            <span className="text-[10px] uppercase tracking-widest font-bold hidden md:inline">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className="relative w-6 h-5 flex flex-col justify-between items-end">
              <span
                className={`h-[1.5px] bg-current transition-all duration-500 ${
                  isOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"
                }`}
              />
              <span
                className={`h-[1.5px] bg-current transition-all duration-500 ${
                  isOpen ? "opacity-0" : "w-4"
                }`}
              />
              <span
                className={`h-[1.5px] bg-current transition-all duration-500 ${
                  isOpen
                    ? "w-6 -rotate-45 -translate-y-[9px]"
                    : "w-6"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

    {/* FULLSCREEN MENU */}
<div
  className={`fixed inset-0 bg-[#FAF9F6] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-auto ${
    isOpen
      ? "translate-y-0 md:translate-x-0"
      : "translate-y-full md:translate-x-full"
  }`}
>
  {/* CLOSE / CANCEL */}
  <div className="absolute top-6 right-6 z-[200] flex items-center space-x-4">
    {/* Cancel text */}
    <button
      onClick={() => setIsOpen(false)}
      className="text-[10px] uppercase tracking-widest font-bold text-white hover:text-[#A68A64] transition-colors"
    >
      Cancel
    </button>

    {/* Divider */}
    <span className="h-4 w-px bg-stone-300" />

    {/* Close icon */}
    <button
      onClick={() => setIsOpen(false)}
      className="flex items-center justify-center text-[#2C1E14] hover:text-[#A68A64] transition-colors group"
    >
      <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
    </button>
  </div>

  {/* WATERMARK (DESKTOP ONLY) */}
  <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none -rotate-90 origin-left">
    <h2 className="text-[25vw] font-serif text-[#2C1E14] tracking-tighter">
      COLLECTION
    </h2>
  </div>

  <div className="relative h-full flex flex-col md:flex-row">
    {/* LEFT: NAV */}
    <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-24 py-24 md:py-32 space-y-12">
      <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold border-b border-stone-200 pb-4 max-w-xs">
        Astra Studio Navigation
      </p>

      <div className="flex flex-col space-y-6 md:space-y-10">
        {navLinks
          .concat([{ name: "Inquire", path: "/contact" }])
          .map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-3xl sm:text-4xl md:text-8xl font-serif tracking-tighter flex items-center group transition-all duration-500 ${
                  isActive
                    ? "text-[#A68A64] italic"
                    : "text-[#2C1E14] hover:pl-8"
                }`
              }
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {link.name}
              <ArrowRight className="ml-6 w-6 h-6 md:w-12 md:h-12 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A68A64]" />
            </NavLink>
          ))}
      </div>

            {/* MOBILE CONTACT */}
            <div className="md:hidden pt-16 space-y-6 border-t border-stone-200">
              <a
                href="mailto:astrainterior83@gmail.com"
                className="flex items-center space-x-3 text-lg text-[#2C1E14]"
              >
                <Mail className="w-5 h-5" />
                <span>astrainterior83@gmail.com</span>
              </a>
              <a
                href="tel:+919345445898"
                className="flex items-center space-x-3 text-lg text-[#2C1E14]"
              >
                <Phone className="w-5 h-5" />
                <span>+91 93454 45898</span>
              </a>
            </div>
          </div>

          {/* RIGHT: DESKTOP CONTACT */}
          <div
            className={`hidden md:flex w-[400px] bg-[#2C1E14] p-20 flex-col justify-between transition-transform duration-1000 delay-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="space-y-12 text-white">
              <div className="space-y-4">
                <p className="text-[#A68A64] text-[10px] uppercase tracking-[0.4em] font-bold">
                  Contact
                </p>
                <a
                  href="mailto:astrainterior83@gmail.com"
                  className="flex items-center space-x-3 text-lg font-light hover:text-[#A68A64]"
                >
                  <Mail className="w-5 h-5" />
                  <span>astrainterior83@gmail.com</span>
                </a>
                <a
                  href="tel:+919345445898"
                  className="flex items-center space-x-3 text-lg font-light hover:text-[#A68A64]"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 93454 45898</span>
                </a>
              </div>
            </div>

            <div className="text-stone-500 text-[9px] uppercase tracking-widest leading-relaxed">
              © 2026 Astra Interior Studio
              <br />
              Race Course, Coimbatore
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
