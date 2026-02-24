import { useNavigate } from 'react-router-dom'; // Import for redirection
import { ArrowUpRight, Sofa, Lightbulb, Home, Hammer } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Interior Design',
    description: 'Full-scale spatial planning and aesthetic curation. We turn empty shells into soulful, lived-in sanctuaries.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    features: ['Spatial Planning', 'Mood Boarding', '3D Visualization'],
  },
  {
    icon: Lightbulb,
    title: 'Electrical Work',
    description: 'Custom lighting schemes and smart home integration that emphasize architectural features and set the mood.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
    features: ['Architectural Lighting', 'Smart Automation', 'Wiring'],
  },
  {
    icon: Sofa,
    title: 'Sofa Revamp & Redesign',
    description: 'Give your heirloom pieces a second life. Premium upholstery and structural restoration with luxury fabrics.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    features: ['Custom Upholstery', 'Frame Restoration', 'Fabric Sourcing'],
  },
  {
    icon: Hammer,
    title: 'Customized Furniture',
    description: 'Bespoke carpentry and furniture design tailored to your specific dimensions and lifestyle needs.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    features: ['Bespoke Cabinetry', 'Handcrafted Tables', 'Wood Finishing'],
  },
];

export default function Services() {
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-[#FAF9F6] overflow-hidden"
    >
      {/* --- SVG VECTOR BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grain" width="400" height="400" patternUnits="userSpaceOnUse">
              <path d="M0 100 Q 100 50 200 100 T 400 100" fill="none" stroke="#4a3728" strokeWidth="0.5" />
              <path d="M0 200 Q 150 120 300 200 T 400 250" fill="none" stroke="#4a3728" strokeWidth="0.5" />
              <path d="M0 300 Q 50 350 200 300 T 400 320" fill="none" stroke="#4a3728" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grain)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-[1px] bg-[#4a3728]"></div>
              <span className="text-xs uppercase tracking-[0.5em] text-[#7d5c41] font-bold">The Astra Standard</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif text-[#2c1e14] leading-[0.95] tracking-tighter">
              Exceptional <br />
              <span className="bg-gradient-to-r from-[#4a3728] via-[#a68a64] to-[#4a3728] bg-clip-text text-transparent italic pb-2">
                Craftsmanship
              </span>
            </h2>
          </div>
          <p className="text-xl text-stone-600 max-w-sm font-light leading-relaxed border-l-2 border-[#a68a64] pl-8 italic">
            "Design is not just what it looks like; it's how it feels under your fingertips."
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate('/services')} // Redirect to service page
              className="group flex flex-col bg-white border border-stone-100 hover:shadow-[0_20px_50px_rgba(74,55,40,0.12)] transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e14]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <span className="absolute top-6 left-6 text-white/50 font-serif text-lg">0{index + 1}</span>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-[#2c1e14] mb-4 group-hover:text-[#a68a64] transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8 font-sans font-light">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                   <div className="flex flex-col">
                     <span className="text-[10px] uppercase tracking-widest text-[#a68a64] font-bold">Starting From</span>
                     <span className="text-sm font-serif text-stone-900">Custom Quote</span>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#4a3728] group-hover:border-[#4a3728] transition-all duration-300">
                     <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with WhatsApp Redirect */}
        <div className="mt-24 relative overflow-hidden bg-gradient-to-r from-[#2c1e14] to-[#4a3728] p-12 md:p-20 text-center flex flex-col items-center">
          <div className="absolute inset-0 opacity-10">
             <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grain)" /></svg>
          </div>
          <h3 className="relative z-10 text-3xl md:text-5xl font-serif text-[#f2e9e4] mb-8">
            Ready to <span className="italic text-[#a68a64]">Astra-fy</span> your home?
          </h3>
          <button 
            onClick={handleWhatsAppRedirect}
            className="relative z-10 px-12 py-5 bg-[#a68a64] text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#8e7350] transition-colors shadow-xl active:scale-95"
          >
            Schedule via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}