import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Home } from 'lucide-react';
import HeroImage from '../assests/astrahero.png'; 

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAF9F6] pt-20 pb-10"
    >
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#F2F0EA] z-0 hidden lg:block will-change-transform" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        
        <div 
          className={`transition-all duration-[1200ms] ease-out will-change-transform transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-[1px] bg-stone-300"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-semibold">
              Astra Interior Est. 2024
            </span>
          </div>

          {/* REPLACE: Content H1 */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif text-stone-900 leading-[1.2] mb-8 tracking-tight">
            Luxury Interior <br />
            <span className="italic text-stone-500 font-normal">Design in Coimbatore</span>
          </h1>

          {/* REPLACE: Content Paragraph */}
          <p className="text-base md:text-lg text-stone-600 max-w-md mb-10 leading-relaxed font-light italic">
            Welcome to Astra Interior Design, your trusted partner for modern and elegant interiors in Coimbatore. We create homes and offices that blend style, comfort, and functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleNavigation('/port')}
              className="group flex items-center justify-center px-10 py-4 bg-stone-900 text-white rounded-none transition-all duration-500 hover:bg-stone-700 active:scale-95"
            >
              <ShoppingBag className="mr-2 w-4 h-4" />
              <span className="tracking-widest text-[11px] uppercase font-medium">View Projects</span>
            </button>

            <button
              onClick={() => handleNavigation('/contactus')}
              className="group flex items-center justify-center px-10 py-4 border border-stone-300 text-stone-900 rounded-none transition-all duration-500 hover:border-stone-900 hover:bg-white active:scale-95"
            >
              <span className="tracking-widest text-[11px] uppercase font-medium">Free Consultation</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-stone-200 pt-8">
            {/* Updated stats to match new content focus */}
            <div>
              <p className="text-2xl font-serif text-stone-900">50+</p>
              <p className="text-[9px] uppercase tracking-widest mt-1 text-stone-400 font-bold">
                Successful Projects
              </p>
            </div>
            <div>
              <p className="text-2xl font-serif text-stone-900">Custom</p>
              <p className="text-[9px] uppercase tracking-widest mt-1 text-stone-400 font-bold">
                Furniture & Lighting
              </p>
            </div>
            <div>
              <p className="text-2xl font-serif text-stone-900">Timeless</p>
              <p className="text-[9px] uppercase tracking-widest mt-1 text-stone-400 font-bold">
                Design Expertise
              </p>
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-[1500ms] cubic-bezier(0.2, 1, 0.3, 1) delay-200 transform will-change-transform ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="relative aspect-[16/18] lg:aspect-[4/5] overflow-hidden shadow-[15px_15px_40px_-15px_rgba(0,0,0,0.08)]">
            <img
              src={HeroImage}
              alt="Luxury Interior Design in Coimbatore"
              loading="eager"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            
            {isLoaded && (
              <div className="absolute top-[40%] left-[60%] group">
                <div className="w-4 h-4 bg-white/80 backdrop-blur-md rounded-full animate-ping absolute"></div>
                <div className="relative w-4 h-4 bg-white rounded-full cursor-pointer shadow-md border border-stone-200"></div>
                <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white p-3 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 border border-stone-100 min-w-[130px] z-20">
                  <p className="text-[9px] text-stone-400 uppercase tracking-widest mb-1">Our Expertise</p>
                  <p className="text-[10px] font-bold uppercase text-stone-900">Practical & Unique</p>
                  <p className="text-xs text-stone-500 mt-1 font-serif italic">bespoke</p>
                </div>
              </div>
            )}
          </div>

          <div className="absolute -bottom-6 -left-12 bg-white p-6 shadow-xl hidden xl:block max-w-[220px] border border-stone-50 will-change-transform">
            <Home className="w-6 h-6 mb-3 text-stone-200" />
            <p className="text-sm font-serif italic text-stone-700 leading-snug">
              "Unique interiors tailored to your luxury lifestyle."
            </p>
            <div className="mt-3 w-6 h-[1px] bg-stone-900"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <h2 className="text-[20vw] font-serif leading-none -mb-12 text-stone-900 opacity-[0.03] translate-z-0">
          ASTRA
        </h2>
      </div>
    </section>
  );
}