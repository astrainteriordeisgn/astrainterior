import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Home, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(7); // Increased to 7s for better readability
  const whatsappNumber = "919345445898";
  const whatsappMsg = encodeURIComponent("Hi Astra Interior, I just submitted an inquiry on your website.");

  useEffect(() => {
    // 1. Only start countdown if the tab is active
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // 2. Safe Redirect Logic
    const redirect = setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, '_blank');
      // Instead of forcing location.href, we open in new tab and 
      // redirect the current tab back to home so they aren't 'stuck'
      navigate('/'); 
    }, 7000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate, whatsappMsg]);

  return (
    <div className="min-h-[100dvh] bg-[#FAF9F6] flex items-center justify-center px-6 relative overflow-hidden">
      {/* CSS FIX: min-h-[100dvh] prevents layout shifts on mobile browsers 
          where the URL bar disappears/reappears.
      */}
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="thank-you-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#2C1E14" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#thank-you-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Animated Icon - Reduced bounce for luxury feel */}
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl border border-stone-100 animate-[bounce_3s_infinite]">
          <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-[#A68A64]" strokeWidth={1} />
        </div>

        {/* Content */}
        <h1 className="text-5xl md:text-7xl font-serif text-[#2C1E14] leading-tight tracking-tighter mb-6">
          Thank <span className="italic text-[#A68A64]">You</span>
        </h1>
        
        <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg mx-auto italic">
          "Your vision is now in our hands. We are preparing to bring your sanctuary to life."
        </p>

        {/* Status Message */}
        <div className="bg-white border border-stone-100 p-6 shadow-sm mb-12 inline-block px-8 md:px-12 rounded-sm">
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2">
            Inquiry Received
          </p>
          <div className="flex items-center justify-center space-x-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
            </div>
            <span className="text-sm text-[#2C1E14] font-medium">
              WhatsApp redirect in <strong>{countdown}s</strong>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <button 
            onClick={() => navigate('/')}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 border border-[#2C1E14] text-[#2C1E14] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#2C1E14] hover:text-white transition-all duration-500"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </button>

          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-[#A68A64] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#8E7350] transition-all duration-500 shadow-lg shadow-[#A68A64]/20"
          >
            <span>Chat Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Large Background Text - Subtle & Hidden on small screens to prevent scroll issues */}
      <div className="hidden md:block absolute -bottom-10 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-serif leading-none text-[#2C1E14] tracking-tighter">ASTRA</h2>
      </div>
    </div>
  );
}