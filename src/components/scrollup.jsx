import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorched down
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Crucial for that high-end feel
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 left-8 z-[1000] transition-all duration-700 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        className="group relative flex items-center space-x-4 bg-black/20 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-full hover:border-[#A68A64] hover:bg-black/40 transition-all duration-500"
      >
        {/* The Technical Circle */}
        <div className="w-10 h-10 rounded-full bg-[#2C1E14] flex items-center justify-center text-[#A68A64] group-hover:bg-[#A68A64] group-hover:text-white transition-all duration-500 shadow-2xl">
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-500" />
        </div>

        {/* The Label */}
        <div className="flex flex-col items-start overflow-hidden">
          <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 font-bold leading-none">
            Ascent
          </span>
          <span className="text-[8px] font-mono text-[#A68A64] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            REF_0.0.0.0
          </span>
        </div>

        {/* Animated Progress Ring (Visual Only) */}
        <div className="absolute inset-0 rounded-full border border-[#A68A64]/10 scale-110 group-hover:scale-125 transition-transform duration-1000" />
      </button>
    </div>
  );
}