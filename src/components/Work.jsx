import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Minus, MoveRight } from 'lucide-react';
import Lenis from "@studio-freight/lenis";

// Import your project images
import Img1 from '../assests/penthouse.png'; // Luxury Villa / Penthouse
import Img2 from '../assests/amber wood.webp'; // Custom Furniture
import Img3 from '../assests/Electrical & Lighting.webp'; // Smart Lighting
import Img4 from '../assests/Sofa Redesign.webp'; // Sofa Revamp
import Img5 from '../assests/Commercial.webp'; // Corporate Office
import Img6 from '../assests/Residential.webp'; // Modern Apartment

const projects = [
  { id: '01', title: 'The Luxury Villa', category: 'Residential', image: Img1 },
  { id: '02', title: 'Bespoke Dining Set', category: 'Custom Furniture', image: Img2 },
  { id: '03', title: 'Corporate Headquarters', category: 'Commercial Office', image: Img5 },
  { id: '04', title: 'Heirloom Sofa Revamp', category: 'Furniture Design', image: Img4 },
  { id: '05', title: 'Minimalist Penthouse', category: 'Residential', image: Img6 },
  { id: '06', title: 'Kitchen Styling', category: 'Hospitality', image: Img3 },
];

export default function Work() {
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section id="work" className="relative py-32 bg-[#FCFBFA] overflow-hidden">
      
      {/* SVG BLUEPRINT BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="blueprint" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#2C1E14" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="1.5" fill="#A68A64" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* SEO Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-4xl">
            <h4 className="text-[#A68A64] font-bold uppercase tracking-[0.5em] text-[10px] mb-6 flex items-center">
              <Minus className="mr-2" /> Selected Portfolio
            </h4>
            <h1 className="text-6xl md:text-8xl font-serif text-[#2C1E14] leading-[0.9] tracking-tighter">
              Interior Design <br />
              <span className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-clip-text text-transparent">Projects in TamilNadu.</span>
            </h1>
            <p className="mt-8 text-stone-500 text-lg font-light max-w-2xl leading-relaxed italic">
              "At Astra Interior Design, every project is a reflection of creativity, precision, and client vision. Transforming spaces into inspiring environments across Tamil Nadu."
            </p>
          </div>
          <div className="text-right border-l border-stone-200 pl-10 hidden md:block">
             <p className="text-stone-400 uppercase tracking-widest text-[10px] mb-2 font-bold">Project Success</p>
             <p className="text-5xl font-serif text-[#2C1E14]">50+ Spaces</p>
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12">
          {projects.map((item, index) => (
            <div 
              key={index} 
              onClick={() => navigate('/services')} 
              className={`group flex flex-col cursor-pointer ${index % 2 !== 0 ? 'lg:translate-y-24' : ''} transition-all duration-700`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" 
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#2C1E14]/10 backdrop-blur-[2px]">
                   <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="text-[#2C1E14] w-5 h-5" />
                   </div>
                </div>

                <div className="absolute top-6 left-6 text-white font-serif text-lg mix-blend-difference opacity-50">
                  {item.id}
                </div>
              </div>

              <div className="mt-8 border-l border-stone-200 pl-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68A64] font-bold block mb-2">
                  {item.category}
                </span>
                <h3 className="text-3xl font-serif text-[#2C1E14] group-hover:italic group-hover:text-[#A68A64] transition-all duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial & CTA */}
        <div className="mt-64 flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-2xl font-serif text-stone-800 italic mb-4">
            "Astra Interior transformed our villa into a luxury sanctuary. Every detail was perfect."
          </p>
          <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-16">– Homeowner, Coimbatore</span>
          
          <button 
            onClick={handleWhatsAppRedirect}
            className="group relative px-16 py-6 border border-[#2C1E14] text-[#2C1E14] overflow-hidden transition-all duration-500 active:scale-95"
          >
            <span className="relative z-10 flex items-center uppercase tracking-widest text-xs font-bold">
              Start Your Project <MoveRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#2C1E14] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
               <span className="uppercase tracking-widest text-xs font-bold font-sans">Chat with our Design Lead</span>
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[22vw] font-serif leading-none -mb-16 text-stone-900">ASTRA</h2>
      </div>
    </section>
  );
}