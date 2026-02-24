import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Home, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const whatsappNumber = "919345445898";

  useEffect(() => {
    // Timer for visual countdown
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect to WhatsApp after 5 seconds
    const redirect = setTimeout(() => {
      window.location.href = `https://wa.me/${whatsappNumber}?text=Hi Astra Interior, I just submitted an inquiry on your website.`;
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decorative Element (Consistent with your brand) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="thank-you-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#2C1E14" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#thank-you-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <div className="mb-10 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-xl border border-stone-100 animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-[#A68A64]" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h1 className="text-5xl md:text-7xl font-serif text-[#2C1E14] leading-tight tracking-tighter mb-6">
          Thank <span className="italic text-[#A68A64]">You</span>
        </h1>
        
        <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg mx-auto italic">
          "Your vision is now in our hands. We are preparing to bring your sanctuary to life."
        </p>

        {/* Status Message */}
        <div className="bg-white border border-stone-100 p-6 shadow-sm mb-12 inline-block px-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-2">
            Automatic Redirection
          </p>
          <div className="flex items-center justify-center space-x-3">
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span className="text-sm text-[#2C1E14]">Connecting to WhatsApp in <strong>{countdown}s</strong>...</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-3 px-8 py-4 border border-[#2C1E14] text-[#2C1E14] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#2C1E14] hover:text-white transition-all duration-500 group"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </button>

          <a 
            href={`https://wa.me/${whatsappNumber}`}
            className="flex items-center space-x-3 px-8 py-4 bg-[#A68A64] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#8E7350] transition-all duration-500 shadow-lg shadow-[#A68A64]/20"
          >
            <span>Chat Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute -bottom-10 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-serif leading-none text-[#2C1E14] tracking-tighter">ASTRA</h2>
      </div>
    </div>
  );
}