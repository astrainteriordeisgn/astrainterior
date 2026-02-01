import { useEffect, useState } from 'react';
import { ArrowRight, ShoppingBag, Home } from 'lucide-react';
import HeroImage from '../assests/astrahero.png'; 

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure the browser has finished initial layout
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAF9F6] pt-24 pb-12"
    >
      {/* Background Decorative Element: Optimized with will-change */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#F2F0EA] z-0 hidden lg:block will-change-transform" />
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 w-full grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        
        {/* Left Content: Optimized animation */}
        <div 
          className={`transition-all duration-[1200ms] ease-out will-change-transform transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-[1px] bg-stone-400"></div>
            <span className="text-xs uppercase tracking-[0.4em] text-stone-500 font-semibold">
              Astra Interior Est. 2024
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl xl:text-9xl font-serif text-stone-900 leading-[1.05] mb-10 tracking-tight">
            Elevated <br />
            <span className="italic text-stone-500">Living</span> Spaces.
          </h1>

          <p className="text-xl text-stone-600 max-w-lg mb-12 leading-relaxed font-light italic">
            Discover curated furniture collections and bespoke interior solutions 
            designed to turn your house into a sanctuary of modern elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => scrollToSection('shop')}
              className="group flex items-center justify-center px-12 py-5 bg-stone-900 text-white rounded-none transition-all duration-500 hover:bg-stone-700 active:scale-95"
            >
              <ShoppingBag className="mr-3 w-5 h-5" />
              <span className="tracking-widest text-sm uppercase font-medium">Shop Collection</span>
            </button>

            <button
              onClick={() => scrollToSection('consultation')}
              className="group flex items-center justify-center px-12 py-5 border border-stone-300 text-stone-900 rounded-none transition-all duration-500 hover:border-stone-900 hover:bg-white active:scale-95"
            >
              <span className="tracking-widest text-sm uppercase font-medium">Book Design Visit</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-3 gap-12 border-t border-stone-200 pt-10">
            {['500+', '12', 'Free'].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl font-serif text-stone-900">{stat}</p>
                <p className="text-xs uppercase tracking-widest mt-1 text-stone-500 font-bold">
                  {idx === 0 ? 'Curated Items' : idx === 1 ? 'Design' : 'Styling Consult'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: Hardware Accelerated Image */}
        <div className={`relative transition-all duration-[1500ms] cubic-bezier(0.2, 1, 0.3, 1) delay-200 transform will-change-transform ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
        }`}>
          <div className="relative aspect-[16/18] lg:aspect-[4/5] overflow-hidden shadow-[20px_20px_50px_-15px_rgba(0,0,0,0.1)]">
            <img
              src={HeroImage}
              alt="Luxury Living Room"
              loading="eager"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            
            {/* Hotspots: Only show pulse after loaded */}
            {isLoaded && (
              <div className="absolute top-[40%] left-[60%] group">
                <div className="w-5 h-5 bg-white/80 backdrop-blur-md rounded-full animate-ping absolute"></div>
                <div className="relative w-5 h-5 bg-white rounded-full cursor-pointer shadow-lg border border-stone-200"></div>
                <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white p-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 border border-stone-100 min-w-[150px] z-20">
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Modern Collection</p>
                  <p className="text-xs font-bold uppercase text-stone-900">Astra Velvet Sofa</p>
                  <p className="text-sm text-stone-600 mt-1 font-serif">book</p>
                </div>
              </div>
            )}
          </div>

          {/* Floating Card: Hidden on mobile for performance */}
          <div className="absolute -bottom-8 -left-16 bg-white p-8 shadow-2xl hidden xl:block max-w-[260px] border border-stone-50 will-change-transform">
            <Home className="w-8 h-8 mb-4 text-stone-300" />
            <p className="text-lg font-serif italic text-stone-800 leading-snug">
              "Quality is in the details of the shadows and the light."
            </p>
            <div className="mt-4 w-8 h-[2px] bg-stone-900"></div>
          </div>
        </div>
      </div>

      {/* Large Background Watermark: Layered for performance */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <h2 className="text-[22vw] font-serif leading-none -mb-16 text-stone-900 opacity-[0.04] translate-z-0">
          ASTRA
        </h2>
      </div>
    </section>
  );
}