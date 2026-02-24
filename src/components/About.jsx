import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Added for navigation
import { Compass, PencilRuler, Trees} from "lucide-react";
import Lenis from "@studio-freight/lenis";

export default function About() {
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section id="about" className="relative py-24 bg-[#FAF9F6] overflow-hidden">
      
      {/* SVG ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#4A3728" strokeWidth="0.5" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#4A3728" strokeWidth="0.5" />
          <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#4A3728" strokeWidth="0.5" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* UPPER SECTION: The Narrative */}
        <div className="flex flex-col lg:flex-row gap-16 mb-40">
          <div className="lg:w-1/2">
            <h4 className="text-[#A68A64] font-bold uppercase tracking-[0.5em] text-[10px] mb-8">
              Since MMXXIV
            </h4>
            <h2 className="text-6xl md:text-8xl font-serif text-[#2C1E14] leading-[0.9] mb-12">
              Astra <br />
              <span className="italic text-[#A68A64]">Interior</span> <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #2C1E14' }}>Studio</span>
            </h2>
            <div className="w-24 h-[1px] bg-[#A68A64] mb-12"></div>
            <p className="text-xl text-stone-600 font-light leading-relaxed max-w-lg italic">
              "We believe that a well-designed space is a quiet dialogue between light, texture, and the people who inhabit it."
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-end">
             <div className="relative group overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Interior" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E14]/40 to-transparent"></div>
             </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Staggered Portfolio & Stats */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-40">
          
          {/* Item 1: The Experience - Redirects to Services */}
          <div 
            className="pt-20 cursor-pointer group" 
            onClick={() => navigate('/services')}
          >
            <div className="aspect-[4/5] bg-stone-200 mb-8 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Detail" />
            </div>
            <h3 className="text-4xl font-serif text-[#2C1E14] mb-4">02 <span className="text-xl align-top italic text-[#A68A64]">Years</span></h3>
            <p className="text-stone-500 text-sm font-light uppercase tracking-widest leading-relaxed">
              Curating high-end residential and commercial environments with a focus on longevity.
            </p>
          </div>

          {/* Item 2: The Projects - Redirects to Portfolio */}
          <div 
            className="lg:mt-[-5rem] border-x border-stone-200 px-12 pb-12 cursor-pointer group"
            onClick={() => navigate('/port')}
          >
            <h3 className="text-4xl font-serif text-[#2C1E14] mb-4">40+ <span className="text-xl align-top italic text-[#A68A64]">Projects</span></h3>
            <p className="text-stone-500 text-sm font-light uppercase tracking-widest leading-relaxed mb-8">
              From minimalist penthouses to boutique offices across the region.
            </p>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Detail" />
            </div>
          </div>

          {/* Item 3: The Philosophy */}
          <div className="pt-40">
             <div className="flex flex-col space-y-12">
               {[
                 { icon: Compass, title: "Spatial Logic", desc: "Scientific flow meets artistic intent." },
                 { icon: PencilRuler, title: "Bespoke Art", desc: "Every furniture piece is tailor-made." },
                 { icon: Trees, title: "Pure Elements", desc: "Organic stones and ethically sourced oaks." }
               ].map((item, i) => (
                 <div key={i} className="group">
                   <item.icon className="w-6 h-6 text-[#A68A64] mb-4 group-hover:scale-110 transition-transform" />
                   <h5 className="font-serif text-[#2C1E14] text-xl mb-2">{item.title}</h5>
                   <p className="text-xs text-stone-400 uppercase tracking-widest">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* LOWER SECTION: Full Width Aesthetic CTA */}
        <div className="relative h-[60vh] flex items-center justify-center bg-[#2C1E14] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" 
            alt="Final Reveal" 
          />
          <div className="relative z-10 text-center px-6">
            <h3 className="text-white text-4xl md:text-6xl font-serif italic mb-12">
              Ready to redefine your <br /> 
              <span className="text-[#A68A64]">personal sanctuary?</span>
            </h3>
            <button 
              onClick={handleWhatsAppRedirect}
              className="px-16 py-6 border border-[#A68A64] text-[#A68A64] uppercase tracking-[0.4em] text-xs font-bold hover:bg-[#A68A64] hover:text-white transition-all duration-500 active:scale-95 shadow-2xl"
            >
              Start a Conversation via WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}