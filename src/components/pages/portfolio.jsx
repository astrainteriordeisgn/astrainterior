import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Added for navigation
import { ArrowUpRight, Filter, ChevronRight } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const categories = ["All Collections", "Residential", "Commercial", "Bespoke Furniture", "Restoration"];

const works = [
  {
    id: "01",
    title: "The Obsidian Penthouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    size: "large"
  },
  {
    id: "02",
    title: "Walnut & Brass Lounge",
    category: "Bespoke Furniture",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: "03",
    title: "Aura Dining Hall",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200 ",
    size: "medium"
  },
  {
    id: "04",
    title: "Minimalist Loft 402",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    size: "medium"
  },
  {
    id: "05",
    title: "Heritage Villa Revamp",
    category: "Restoration",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    size: "large"
  },
  {
    id: "06",
    title: "Velvet Sky Lounge",
    category: "Bespoke Furniture",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    size: "small"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Collections");
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

  const filteredWorks = activeCategory === "All Collections" 
    ? works 
    : works.filter(w => w.category === activeCategory);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
     
      <main className="pt-40 pb-24 relative">
        {/* --- ARCHITECTURAL SVG BACKGROUND --- */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="portfolio-grid" width="150" height="150" patternUnits="userSpaceOnUse">
                <path d="M 150 0 L 0 0 0 150" fill="none" stroke="#2C1E14" strokeWidth="0.5"/>
                <circle cx="75" cy="75" r="1.5" fill="#A68A64" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          
          {/* PAGE HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-[1px] bg-[#A68A64]"></div>
                <span className="text-[#A68A64] uppercase tracking-[0.4em] text-[10px] font-bold">Project Exhibition</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-serif text-[#2C1E14] leading-none tracking-tighter">
                Selected <br />
                <span className="italic font-light text-[#A68A64]">Portfolios.</span>
              </h1>
            </div>
            <div className="max-w-xs border-l border-stone-200 pl-8">
              <p className="text-stone-500 font-light italic leading-relaxed">
                "A visual archive of 40+ sanctuaries, delivered with architectural precision and a soulful aesthetic."
              </p>
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 mb-20 border-b border-stone-200 pb-8">
            <div className="flex items-center space-x-2 text-[#A68A64]">
              <Filter className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Filter By:</span>
            </div>
            <div className="flex flex-wrap gap-8">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative ${
                    activeCategory === cat ? 'text-[#2C1E14]' : 'text-stone-400 hover:text-[#2C1E14]'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#A68A64]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* MASONRY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-24 items-start">
            {filteredWorks.map((work, idx) => (
              <div 
                key={work.id} 
                onClick={() => navigate('/services')} // Added: Click card to go to Services
                className={`group relative flex flex-col cursor-pointer ${
                  work.size === 'large' ? 'lg:col-span-8' : 
                  work.size === 'medium' ? 'lg:col-span-6' : 'lg:col-span-4'
                }`}
              >
                {/* PROJECT IMAGE */}
                <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto h-[400px] md:h-[600px] shadow-lg">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E14]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Floating ID */}
                  <span className="absolute top-8 left-8 text-white/50 font-serif text-lg tracking-widest">{work.id}</span>
                </div>

                {/* PROJECT INFO */}
                <div className="mt-8 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68A64] font-bold block mb-2">{work.category}</span>
                    <h3 className="text-3xl font-serif text-[#2C1E14] group-hover:italic transition-all duration-500">{work.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#2C1E14] group-hover:border-[#2C1E14] transition-all">
                    <ArrowUpRight className="w-5 h-5 text-stone-300 group-hover:text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LOAD MORE / NEXT CHAPTER */}
          <div className="mt-40 text-center border-t border-stone-200 pt-20">
             <p className="text-stone-400 font-serif italic text-2xl mb-12">Looking for something more personal?</p>
             <button 
                onClick={handleWhatsAppRedirect} // Added: Redirect to WhatsApp
                className="group px-16 py-6 border border-[#2C1E14] text-[#2C1E14] uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-[#2C1E14] hover:text-white transition-all duration-500 flex items-center mx-auto active:scale-95"
             >
                Commission a Private Project <ChevronRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>
      </main>
    </div>
  );
}