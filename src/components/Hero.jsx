import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Home } from 'lucide-react';
// Ensure this is converted to .webp for the 9MB -> 400KB saving!
import HeroImage from '../assests/astrahero.webp'; 

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // We only use this for entrance animations, not to block rendering
    setIsMounted(true);
  }, []);

  const handleNavigation = (path) => {
    if (path.startsWith('/')) {
      navigate(path);
    } else {
      const element = document.getElementById(path);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#FAF9F6] pt-20 pb-10"
    >
      {/* 1. Background Decoration - Optimized with transform-gpu */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#F2F0EA] z-0 hidden lg:block transform-gpu" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        
        {/* TEXT CONTENT AREA */}
        <div 
          className={`transition-all duration-[1000ms] ease-out transform-gpu ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-[1px] bg-stone-300"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-semibold">
              Astra Interior Est. 2024
            </span>
          </div>

          {/* SEO FIX: Ensuring H1 is clear and discoverable */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif text-stone-900 leading-[1.2] mb-8 tracking-tight">
            Luxury Interior <br />
            <span className="italic text-stone-500 font-normal">Design in Coimbatore</span>
          </h1>

          <p className="text-base md:text-lg text-stone-600 max-w-md mb-10 leading-relaxed font-light italic">
            Welcome to Astra Interior Design, your trusted partner for modern and elegant interiors in Coimbatore. We create homes and offices that blend style, comfort, and functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleNavigation('/port')}
              aria-label="View Projects"
              className="group flex items-center justify-center px-10 py-4 bg-stone-900 text-white transition-all duration-500 hover:bg-stone-700 active:scale-95"
            >
              <ShoppingBag className="mr-2 w-4 h-4" />
              <span className="tracking-widest text-[11px] uppercase font-medium">View Projects</span>
            </button>

            <button
              onClick={() => handleNavigation('/contactus')}
              aria-label="Get Free Consultation"
              className="group flex items-center justify-center px-10 py-4 border border-stone-300 text-stone-900 transition-all duration-500 hover:border-stone-900 hover:bg-white active:scale-95"
            >
              <span className="tracking-widest text-[11px] uppercase font-medium">Free Consultation</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* STATS SECTION - Semantic structure fix */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-stone-200 pt-8">
            {[
              { val: '50+', label: 'Successful Projects' },
              { val: 'Custom', label: 'Furniture & Lighting' },
              { val: 'Timeless', label: 'Design Expertise' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-serif text-stone-900">{stat.val}</p>
                <p className="text-[9px] uppercase tracking-widest mt-1 text-stone-400 font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE AREA - The LCP Target */}
        <div className={`relative transition-all duration-[1200ms] ease-out delay-100 transform-gpu ${
          isMounted ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
        }`}>
          <div className="relative aspect-[16/18] lg:aspect-[4/5] overflow-hidden shadow-2xl bg-stone-200">
            <img
              src={HeroImage}
              alt="Luxury Interior Design in Coimbatore"
              loading="eager" // Forces immediate load
              fetchPriority="high" // Tells browser this is the most important image
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            
            {/* Interactive Tooltip (Bespoke Pin) */}
            <div className="absolute top-[40%] left-[60%] group z-20">
              <div className="w-4 h-4 bg-white/80 backdrop-blur-md rounded-full animate-ping absolute"></div>
              <div className="relative w-4 h-4 bg-white rounded-full shadow-md border border-stone-200"></div>
              <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white p-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 border border-stone-100 min-w-[140px] pointer-events-none">
                <p className="text-[9px] text-stone-400 uppercase tracking-widest mb-1">Our Expertise</p>
                <p className="text-[10px] font-bold uppercase text-stone-900">Practical & Unique</p>
                <p className="text-xs text-stone-500 mt-1 font-serif italic">bespoke</p>
              </div>
            </div>
          </div>

          {/* Floating Quote Box */}
          <div className="absolute -bottom-6 -left-12 bg-white p-6 shadow-xl hidden xl:block max-w-[220px] border border-stone-50 transform-gpu">
            <Home className="w-6 h-6 mb-3 text-stone-200" />
            <p className="text-sm font-serif italic text-stone-700 leading-snug">
              "Unique interiors tailored to your luxury lifestyle."
            </p>
            <div className="mt-3 w-6 h-[1px] bg-stone-900"></div>
          </div>
        </div>
      </div>

      {/* Background Decor Text - Uses transform-gpu to prevent reflow during scroll */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <h2 className="text-[20vw] font-serif leading-none -mb-12 text-stone-900 opacity-[0.03] transform-gpu">
          ASTRA
        </h2>
      </div>
    </section>
  );
}