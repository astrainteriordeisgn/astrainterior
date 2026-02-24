import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Added for navigation
import { Compass, PenTool, ClipboardCheck, Target, Hammer, Key, MoveRight, MessageSquare } from "lucide-react";

const steps = [
  { id: "01", title: "Discovery", sub: "Architectural Audit", desc: "Mapping light orientations and biological rhythms to define the spatial intent.", icon: Compass, img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" },
  { id: "02", title: "Visualization", sub: "Digital Twin", desc: "Hyper-realistic 8K ray-traced simulations of textures under seasonal lighting.", icon: PenTool, img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" },
  { id: "03", title: "Curation", sub: "Global Sourcing", desc: "Procuring blockchain-verified heirloom marbles and timbers from global artisans.", icon: ClipboardCheck, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200" },
  { id: "04", title: "Engineering", sub: "Invisible Systems", desc: "Integrating acoustic shielding and smart-home nodes within architectural voids.", icon: Target, img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" },
  { id: "05", title: "Execution", sub: "Artisan Build", desc: "Millimetric construction led by master craftsmen with heirloom-quality focus.", icon: Hammer, img: "https://images.unsplash.com/photo-1541604193435-22287d32c2c2?auto=format&fit=crop&q=80&w=1200" },
  { id: "06", title: "Calibration", sub: "Sensory Reveal", desc: "The final reveal—calibrating custom scents and automated lighting scenes.", icon: Key, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" },
];

export default function HyperrealisticFlute() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section className="relative w-full h-screen bg-[#080808] flex items-center justify-center overflow-hidden font-sans">
      
      {/* --- LAYER 1: DYNAMIC BACKGROUND IMAGE --- */}
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            active === idx ? "opacity-40 scale-100 blur-0" : "opacity-0 scale-110 blur-xl"
          }`}
        >
          <img src={step.img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
        </div>
      ))}

      {/* --- LAYER 2: THE "FLUTE BODY" OVERLAY --- */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 z-10">
        <div 
          className="h-full bg-[#A68A64] shadow-[0_0_20px_#A68A64] transition-all duration-700 ease-out"
          style={{ width: `${((active + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* --- LAYER 3: CENTRAL CONTENT --- */}
      <div className="relative z-20 max-w-[1400px] w-full px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Metadata & Typography */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-mono text-[#A68A64] tracking-[0.5em] uppercase">Phase_{steps[active].id}</span>
            <div className="h-[1px] w-12 bg-[#A68A64]" />
          </div>
          
          <h2 className="text-7xl md:text-9xl font-serif leading-none tracking-tighter text-white">
            {steps[active].title} <br />
            <span className="italic text-stone-500 font-light text-5xl md:text-7xl">{steps[active].sub}</span>
          </h2>

          <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
            {steps[active].desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            {/* Redirect to Services */}
            <button 
              onClick={() => navigate('/services')}
              className="flex items-center space-x-4 group text-white outline-none"
            >
               <span className="uppercase text-[10px] tracking-[0.4em] font-bold group-hover:text-[#A68A64] transition-colors">View Services</span>
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#A68A64] transition-all">
                  <MoveRight className="w-4 h-4" />
               </div>
            </button>

            {/* Redirect to WhatsApp */}
            <button 
              onClick={handleWhatsAppRedirect}
              className="flex items-center space-x-4 group text-white outline-none"
            >
               <span className="uppercase text-[10px] tracking-[0.4em] font-bold group-hover:text-[#25D366] transition-colors">Quick Inquiry</span>
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#25D366] transition-all">
                  <MessageSquare className="w-4 h-4" />
               </div>
            </button>
          </div>
        </div>

        {/* Right: Technical Image Monitor */}
        <div className="relative hidden lg:block">
            <div className="aspect-[4/5] w-[450px] ml-auto relative">
              <div className="absolute inset-0 bg-[#A68A64]/20 blur-[100px] rounded-full" />
              
              <div className="relative h-full w-full border border-white/10 p-4 bg-black/40 backdrop-blur-3xl overflow-hidden group">
                 {steps.map((step, idx) => (
                    <img 
                      key={idx}
                      src={step.img} 
                      alt={step.title}
                      className={`absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover transition-all duration-1000 ${
                        active === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                      }`}
                    />
                 ))}
                 <div className="absolute top-8 left-8 border-l border-t border-[#A68A64] w-8 h-8" />
                 <div className="absolute bottom-8 right-8 border-r border-b border-[#A68A64] w-8 h-8" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 border border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                        <Target className="w-4 h-4 text-white/20" />
                    </div>
                 </div>
              </div>
            </div>
        </div>
      </div>

      {/* --- LAYER 4: THE FLUTE KEYS (NAVIGATION) --- */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-end space-x-4 md:space-x-12">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className="group flex flex-col items-center space-y-4 outline-none"
          >
            <span className={`text-[10px] font-mono transition-all duration-500 ${active === idx ? "text-[#A68A64] -translate-y-2" : "text-stone-600 opacity-0"}`}>
              {step.title}
            </span>
            <div className={`
              w-10 h-10 md:w-14 md:h-14 rounded-full border transition-all duration-500 flex items-center justify-center
              ${active === idx 
                ? "bg-[#A68A64] border-[#A68A64] shadow-[0_0_30px_rgba(166,138,100,0.5)] scale-110" 
                : "bg-transparent border-white/10 hover:border-white/40"
              }
            `}>
              <step.icon className={`w-4 h-4 md:w-6 md:h-6 ${active === idx ? "text-white" : "text-stone-500"}`} />
            </div>
            <div className={`h-8 w-[1px] bg-gradient-to-b from-white/20 to-transparent ${active === idx ? "opacity-100" : "opacity-0"}`} />
          </button>
        ))}
      </div>

      {/* Background Watermark */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-[0.02] pointer-events-none rotate-90 select-none">
        <h2 className="text-[25vw] font-serif text-white tracking-tighter uppercase leading-none">Astra</h2>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
}