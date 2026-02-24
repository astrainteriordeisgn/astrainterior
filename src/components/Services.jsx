import { useNavigate } from 'react-router-dom'; // Added for navigation
import { ArrowUpRight, Sofa, Lightbulb, Home, Hammer, Utensils, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Full Interior Design',
    description: 'End-to-end spatial planning and aesthetic curation. We turn empty shells into soulful, lived-in sanctuaries.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    features: ['Spatial Planning', 'Mood Boarding', '3D Visualization'],
  },
  {
    icon: Utensils,
    title: 'Kitchen & Bath Modular',
    description: 'Ergonomic modular solutions blending German engineering with high-end Italian finishes.',
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
    features: ['Modular Cabinetry', 'Quartz Surfaces', 'Anti-Rust Hardware'],
  },
  {
    icon: Lightbulb,
    title: 'Lighting Architecture',
    description: 'Custom lighting schemes and smart home integration that emphasize architectural features.',
    image: 'https://images.pexels.com/photos/3700369/pexels-photo-3700369.jpeg',
    features: ['Layered Lighting', 'Automation', 'Feature Fixtures'],
  },
  {
    icon: Sofa,
    title: 'Sofa Revamp & Redesign',
    description: 'Premium upholstery and structural restoration using luxury fabrics to breathe life into heirloom pieces.',
    image: 'https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg',
    features: ['Custom Upholstery', 'Restoration', 'Fabric Sourcing'],
  },
  {
    icon: Hammer,
    title: 'Bespoke Furniture',
    description: 'One-of-a-kind carpentry tailored to your specific dimensions and lifestyle needs.',
    image: 'https://images.pexels.com/photos/700549/pexels-photo-700549.png',
    features: ['Handcrafted Tables', 'Wardrobes', 'Wood Finishing'],
  },
  {
    icon: Paintbrush,
    title: 'Painting',
    description: 'The final layer of design—selecting art, textures, and artifacts to tell your unique story.',
    image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg',
    features: ['Art Consultation', 'Soft Furnishings', 'Decor Curation'],
  },
];

export default function Services() {
  const navigate = useNavigate();
  const whatsappNumber = "919345445898";

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section id="services" className="relative py-32 bg-[#FAF9F6] overflow-hidden">
      
      {/* SVG Wood Grain / Topography Background */}
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
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-[1px] bg-[#4a3728]"></div>
              <span className="text-xs uppercase tracking-[0.5em] text-[#7d5c41] font-bold">The Astra Standard</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif text-[#2c1e14] leading-[0.95] tracking-tighter">
              Bespoke <br />
              <span className="bg-gradient-to-r from-[#4a3728] via-[#a68a64] to-[#4a3728] bg-clip-text text-transparent italic pb-2">
                Design Solutions
              </span>
            </h2>
          </div>
          <p className="text-xl text-stone-600 max-w-sm font-light leading-relaxed border-l-2 border-[#a68a64] pl-8 italic">
            "We orchestrate every detail from structural shifts to the final thread of upholstery."
          </p>
        </div>

        {/* 6 Section Services Grid (3 columns on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate('/services')} // Redirection to service page
              className="group flex flex-col bg-white border border-stone-100 hover:shadow-[0_30px_60px_-15px_rgba(44,30,20,0.15)] transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e14]/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                <span className="absolute bottom-6 left-6 text-white font-serif text-xl tracking-widest">0{index + 1}</span>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-[#2c1e14] group-hover:text-[#a68a64] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <service.icon className="w-5 h-5 text-stone-300" />
                </div>
                
                <p className="text-stone-500 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <span key={fIdx} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-stone-50 text-stone-400 border border-stone-100">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#a68a64] font-bold hover:underline">
                    View Project Details
                  </span>
                  <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#4a3728] group-hover:border-[#4a3728] transition-all">
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with WhatsApp Redirect */}
        <div className="mt-24 relative overflow-hidden bg-gradient-to-br from-[#2c1e14] to-[#4a3728] p-12 md:p-24 text-center">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grain)" /></svg>
          </div>
          <h3 className="relative z-10 text-4xl md:text-6xl font-serif text-[#f2e9e4] mb-8 leading-tight">
            Ready to <span className="italic text-[#a68a64]">Astra-fy</span> <br className="hidden md:block" /> your private sanctuary?
          </h3>
          <button 
            onClick={handleWhatsAppRedirect}
            className="relative z-10 px-16 py-5 bg-[#a68a64] text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#8e7350] transition-all shadow-2xl active:scale-95"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}