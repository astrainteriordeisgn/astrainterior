import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";
import { 
  Compass, 
  PenTool, 
  ClipboardCheck, 
  MoveRight, 
  MapPin, 
  Star, 
  Anchor,
  Box // Added for 3D representation
} from "lucide-react";

const sectionsData = {
  locations: [
    { 
      name: "Coimbatore", 
      projects: "28 Projects", 
      type: "HQ Atelier", 
      desc: "Our flagship design atelier at Race Course — where concept development, material research, and execution strategy merge to craft benchmark interiors.",
      coords: { x: "20%", y: "30%" } // Perspective coordinates
    },
    { 
      name: "Chennai", 
      projects: "12 Projects", 
      type: "Design Studio", 
      desc: "Luxury apartment transformations along ECR and premium villa interiors blending contemporary elegance with coastal calm.",
      coords: { x: "70%", y: "15%" }
    },
    { 
      name: "Madurai", 
      projects: "6 Projects", 
      type: "Heritage Design", 
      desc: "Modern reinterpretation of traditional Tamil architecture with refined material palettes.",
      coords: { x: "40%", y: "70%" }
    },
    { 
      name: "Salem", 
      projects: "5 Projects", 
      type: "Consultancy", 
      desc: "Industrial and residential transformations focused on spatial efficiency and timeless aesthetics.",
      coords: { x: "35%", y: "40%" }
    },
    { 
      name: "Erode", 
      projects: "4 Projects", 
      type: "Bespoke", 
      desc: "Custom furniture commissions crafted with precision detailing and premium finishes.",
      coords: { x: "25%", y: "45%" }
    },
    { 
      name: "Tiruppur", 
      projects: "7 Projects", 
      type: "Industrial", 
      desc: "Modern office interiors designed to enhance productivity and brand identity.",
      coords: { x: "15%", y: "50%" }
    },
    { 
      name: "Pollachi", 
      projects: "5 Projects", 
      type: "Estate Living", 
      desc: "Farmhouse luxury interiors combining open planning, natural textures, and relaxed sophistication.",
      coords: { x: "10%", y: "65%" }
    }
  ]
};

export default function Aboutus() {
  const [activeLoc, setActiveLoc] = useState(0);
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=I'd like to consult about a project.`, '_blank');
  };

  return (
    <div className="bg-[#FAF9F6] text-[#2C1E14] selection:bg-[#A68A64] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 md:px-16 overflow-hidden border-b border-stone-100">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#A68A64] font-bold mb-8 block">
              Section 01 — Our Genesis
            </span>

            <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] mb-10 tracking-tighter">
              Crafting <span className="italic text-[#A68A64]">Timeless Interiors</span><br/>
              That Reflect Identity & Precision.
            </h1>

            <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
              Astra Interior Design was founded in Coimbatore with a singular vision —
              to bridge architectural discipline with emotional living. We believe a
              well-designed space should not only look refined but feel intuitive,
              balanced, and deeply personal. From luxury residences to commercial
              workspaces, every project is approached with clarity, craftsmanship,
              and long-term functionality in mind.
            </p>

            <p className="text-stone-500 font-light leading-relaxed mb-10">
              Our team combines global design exposure with local artisan expertise,
              ensuring each square inch serves a purpose while expressing character.
              Every detail is intentional. Every finish is considered.
            </p>

            <button 
              onClick={() => navigate('/port')}
              className="flex items-center space-x-3 text-[#A68A64] font-bold text-xs uppercase tracking-widest hover:text-[#2C1E14] transition-colors"
            >
              <span>Explore Portfolio</span>
              <MoveRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }} 
             whileInView={{ scale: 1, opacity: 1 }} 
             transition={{ duration: 1.2 }}
             className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-stone-200">
               <img 
                 src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full h-full object-cover" 
                 alt="Luxury Interior" 
               />
            </div>
          </motion.div>

        </div>
      </section>

      {/* REGIONAL PRESENCE - 3D REALISTIC DESIGN */}
      <section className="py-32 bg-[#1A1512] text-white px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">

          <div className="relative z-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#A68A64] font-bold mb-8 block">
              Regional Presence
            </span>

            <p className="text-stone-400 font-light leading-relaxed mb-10 text-sm max-w-sm">
              Our design footprint spans across South India. Each city influences
              our creative vocabulary — from coastal minimalism to heritage-rich
              detailing — while maintaining Astra’s core philosophy of balance.
            </p>

            <div className="h-[450px] overflow-y-auto pr-6 space-y-2 custom-scrollbar">
              {sectionsData.locations.map((loc, i) => (
                <button 
                  key={i}
                  onMouseEnter={() => setActiveLoc(i)}
                  className={`w-full p-5 text-left transition-all duration-500 rounded-lg group ${
                    activeLoc === i ? 'bg-[#A68A64] text-white scale-[1.02]' : 'hover:bg-white/5 text-stone-500'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-serif">{loc.name}</h4>
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${activeLoc === i ? 'text-white' : 'text-[#A68A64]'}`}>
                      {loc.projects}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* 3D PERSPECTIVE ATELIER DESIGN */}
          <div className="relative h-[600px] w-full hidden md:flex items-center justify-center perspective-1000">
             <motion.div 
               animate={{ rotateX: 55, rotateZ: -25 }}
               transition={{ duration: 0.5 }}
               className="relative w-[80%] h-[80%] bg-[#2C1E14] border border-[#A68A64]/30 shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden"
               style={{ transformStyle: 'preserve-3d' }}
             >
                {/* 3D Grid Overlay */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#A68A64 1px, transparent 1px), linear-gradient(90deg, #A68A64 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                {/* 3D Site Indicators */}
                {sectionsData.locations.map((loc, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: loc.coords.x, top: loc.coords.y, translateZ: '20px' }}
                  >
                    <div className={`relative flex items-center justify-center transition-all duration-500 ${activeLoc === i ? 'scale-150' : 'scale-100 opacity-40'}`}>
                      <div className="absolute w-8 h-8 bg-[#A68A64]/20 rounded-full animate-ping" />
                      <MapPin className={`w-6 h-6 ${activeLoc === i ? 'text-[#A68A64]' : 'text-stone-500'}`} />
                    </div>
                  </motion.div>
                ))}

                {/* Vertical Light Rays for Active Loc */}
                <motion.div 
                  animate={{ left: sectionsData.locations[activeLoc].coords.x, top: sectionsData.locations[activeLoc].coords.y }}
                  className="absolute w-px h-64 bg-gradient-to-t from-[#A68A64] to-transparent pointer-events-none"
                  style={{ translateZ: '0px', transform: 'rotateX(-90deg)', originY: 'bottom' }}
                />
             </motion.div>

             {/* Info Floating Card */}
             <AnimatePresence mode="wait">
               <motion.div 
                 key={activeLoc}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="absolute bottom-10 right-0 z-30 bg-white p-8 shadow-2xl max-w-xs border-t-4 border-[#A68A64]"
               >
                 <Box className="w-8 h-8 text-[#A68A64] mb-4" />
                 <h3 className="text-2xl font-serif text-[#2C1E14] mb-2">
                   {sectionsData.locations[activeLoc].name}
                 </h3>
                 <p className="text-[#A68A64] font-bold tracking-widest uppercase text-[10px] mb-4">
                   {sectionsData.locations[activeLoc].type}
                 </p>
                 <p className="text-stone-500 text-xs leading-relaxed italic">
                   {sectionsData.locations[activeLoc].desc}
                 </p>
                 <div className="mt-6 flex space-x-1 text-[#A68A64]">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 px-6 md:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32">

          <div className="space-y-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#A68A64] font-bold block">
              Section 06-07 — Process
            </span>

            <p className="text-stone-500 font-light leading-relaxed text-base">
              Our methodology balances structure with creativity. From initial
              consultations to final installation, every stage is strategically
              planned and carefully executed.
            </p>

            <div className="space-y-12">
              {[
                { 
                  icon: Compass, 
                  title: "Discovery", 
                  text: "Understanding lifestyle patterns, spatial flow, lighting, and future adaptability." 
                },
                { 
                  icon: PenTool, 
                  title: "Visualization", 
                  text: "Detailed 3D renders, curated material boards, and technical drawings for clarity." 
                },
                { 
                  icon: ClipboardCheck, 
                  title: "Execution", 
                  text: "On-site supervision, premium sourcing, and flawless finishing delivery." 
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-2xl font-serif text-stone-300 group-hover:text-[#A68A64] transition-colors">
                    0{i+1}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-serif">{step.title}</h4>
                    <p className="text-stone-500 text-sm font-light leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Tilt className="bg-[#2C1E14] p-16 relative overflow-hidden text-white flex flex-col justify-center">
             <Anchor className="absolute top-10 right-10 w-32 h-32 text-white/5" />
             <h3 className="text-3xl font-serif italic mb-8">Global Sourcing.</h3>
             <p className="text-stone-400 font-light leading-relaxed mb-10">
               From Italian Carrara marble to engineered European oak, 
               we source globally to ensure unmatched material quality, 
               durability, and timeless aesthetic value.
             </p>
          </Tilt>

        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-white px-6 md:px-16 text-center border-t border-stone-100">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-3xl md:text-5xl font-serif text-stone-800 italic leading-tight mb-16">
            "A well-designed space is not an expense — it is an investment in how you live."
          </p>

          <button 
            onClick={handleWhatsAppRedirect}
            className="group relative px-20 py-8 bg-[#2C1E14] text-white overflow-hidden transition-all duration-500 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] font-bold flex items-center">
              Consult with Astra <MoveRight className="ml-4 w-5 h-5" />
            </span>
          </button>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #A68A64; }
      `}} />
    </div>
  );
}