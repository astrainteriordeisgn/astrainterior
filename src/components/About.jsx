import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 
import { Compass, PencilRuler, Trees, Target, Heart, Award } from "lucide-react";
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
        
        {/* UPPER SECTION: The Narrative & Our Story */}
        <div className="flex flex-col lg:flex-row gap-16 mb-40">
          <div className="lg:w-1/2">
            <h4 className="text-[#A68A64] font-bold uppercase tracking-[0.5em] text-[10px] mb-8">
              Since MMXXIV
            </h4>
            {/* SEO Heading: About Astra Interior Design */}
            <h1 className="text-5xl md:text-7xl font-serif text-[#2C1E14] leading-[1.1] mb-12">
              About Astra <br />
              <span className="italic text-[#A68A64]">Interior Design</span>
            </h1>
            <div className="w-24 h-[1px] bg-[#A68A64] mb-12"></div>
            <div className="space-y-6">
              <p className="text-stone-600 font-light leading-relaxed max-w-lg">
                Astra Interior Design is a leading interior design studio based in Coimbatore, Tamil Nadu. We specialize in creating luxury homes, stylish offices, and custom furniture that reflect your lifestyle. 
              </p>
              <p className="text-stone-500 text-sm italic border-l-2 border-[#A68A64] pl-6 py-2">
                "Founded with a vision to redefine modern living, we have grown into a full-service interior design company known for creativity, precision, and attention to detail."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-end">
             <div className="relative group overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                  alt="Astra Interior Studio Coimbatore" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E14]/40 to-transparent"></div>
             </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Staggered Stats & Core Services */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-40">
          
          {/* Why Choose Us */}
          <div className="pt-20">
            <h3 className="text-3xl font-serif text-[#2C1E14] mb-8">Why Choose Us</h3>
            <ul className="space-y-6">
               {[
                 { icon: Award, text: "Experienced team with 50+ successful projects" },
                 { icon: Heart, text: "Personalized design consultations" },
                 { icon: Target, text: "3D visualizations before execution" }
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center space-x-4">
                   <item.icon className="w-5 h-5 text-[#A68A64]" />
                   <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">{item.text}</span>
                 </li>
               ))}
            </ul>
          </div>

          {/* Our Story / Portfolio Link */}
          <div 
            className="lg:mt-[-5rem] border-x border-stone-200 px-12 pb-12 cursor-pointer group"
            onClick={() => navigate('/port')}
          >
            <h3 className="text-4xl font-serif text-[#2C1E14] mb-4">50+ <span className="text-xl align-top italic text-[#A68A64]">Projects</span></h3>
            <p className="text-stone-500 text-sm font-light uppercase tracking-widest leading-relaxed mb-8">
              Trusted by families and businesses across South India and Tamil Nadu.
            </p>
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxury Home Coimbatore" />
            </div>
          </div>

          {/* Our Philosophy */}
          <div className="pt-40">
             <div className="flex flex-col space-y-12">
                {[
                  { icon: Compass, title: "Our Philosophy", desc: "Design is about how a space feels, inspiring comfort and beauty." },
                  { icon: PencilRuler, title: "Bespoke Furniture", desc: "Crafting tailor-made pieces from sofas to dining tables." },
                  { icon: Trees, title: "Luxury Homes", desc: "Elegant designs balancing modern style with timeless comfort." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <item.icon className="w-6 h-6 text-[#A68A64] mb-4 group-hover:scale-110 transition-transform" />
                    <h5 className="font-serif text-[#2C1E14] text-xl mb-2">{item.title}</h5>
                    <p className="text-xs text-stone-400 uppercase tracking-widest leading-loose">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* LOWER SECTION: Our Promise CTA */}
        <div className="relative h-[60vh] flex items-center justify-center bg-[#2C1E14] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" 
            alt="Interior Design Promise" 
          />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h3 className="text-white text-3xl md:text-5xl font-serif italic mb-6">
              Our <span className="text-[#A68A64]">Promise</span>
            </h3>
            <p className="text-stone-400 text-lg font-light mb-12 max-w-2xl mx-auto italic">
              "We promise to deliver designs that are practical, stylish, and long-lasting, working closely with you to exceed every expectation."
            </p>
            <button 
              onClick={handleWhatsAppRedirect}
              className="px-12 py-5 border border-[#A68A64] text-[#A68A64] uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-[#A68A64] hover:text-white transition-all duration-500 active:scale-95"
            >
              Start Your Design Journey
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}