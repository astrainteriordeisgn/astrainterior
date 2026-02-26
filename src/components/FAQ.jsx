import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is the typical timeline for a full villa renovation?',
    answer: 'A comprehensive interior transformation usually takes 12 to 24 weeks. This includes: Conceptual phase (~4 weeks), Material procurement (6–8 weeks), and On-site execution. Clients receive a project-specific Gantt chart during the second consultation.'
  },
  {
    question: 'Do you offer a "Shop the Look" service for specific rooms?',
    answer: 'Yes. Astra Interior provides an e-commerce platform where you can purchase curated furniture sets from portfolio projects. They also offer "Astra Collections", which are pre-designed interior packages for living, dining, and master suites.'
  },
  {
    question: 'How do you handle custom furniture and upholstery?',
    answer: 'Astra operates its own artisanal workshop. Every piece — from walnut dining tables to Italian velvet sofas — is handcrafted to specific dimensions and material preferences.'
  },
  {
    question: 'Can I visit the site during the execution phase?',
    answer: 'Yes. Clients are encouraged to visit at key milestones. In addition, Astra provides a weekly digital progress report with high-resolution photos and updates on materials and craftsmanship.'
  },
  {
    question: 'Where do you source your materials from?',
    answer: 'Materials are sourced globally with a focus on sustainability: Marbles from Carrara, Italy; Oaks from managed European forests; and Textiles hand-woven by local traditional weavers.'
  },
  {
    question: 'Do you provide 3D visualizations before work begins?',
    answer: 'Yes. Every Astra project includes photorealistic 3D renders, allowing clients to experience the interplay of light, shadow, and texture before execution begins.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 bg-[#FAF9F6] overflow-hidden">
      
      {/* SVG ARCHITECTURAL BLUEPRINT BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arch-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#2C1E14" strokeWidth="1"/>
              <circle cx="50" cy="50" r="2" fill="#A68A64" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Updated for SEO & Aesthetic */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-[1px] bg-[#A68A64]"></div>
            <span className="text-[#A68A64] uppercase tracking-[0.4em] text-xs font-bold">Inquiries</span>
            <div className="w-12 h-[1px] bg-[#A68A64]"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-[#2C1E14] leading-tight tracking-tighter mb-8">
            Common <br /> 
            <span className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-clip-text text-transparent">Curiosities</span>
          </h2>
          <p className="text-stone-500 font-light italic text-lg leading-relaxed">
            "Clarity is the first step toward a well-designed sanctuary."
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8 items-start">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-500 border-b border-stone-200 ${
                openIndex === idx ? 'pb-8' : 'pb-4'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full py-6 flex items-start justify-between text-left group"
              >
                <div className="flex space-x-6">
                  <span className="text-stone-300 font-serif text-2xl group-hover:text-[#A68A64] transition-colors">
                    0{idx + 1}
                  </span>
                  <span className={`text-xl font-serif transition-colors ${
                    openIndex === idx ? 'text-[#A68A64] italic' : 'text-[#2C1E14]'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === idx ? 
                    <Minus className="w-5 h-5 text-[#A68A64]" /> : 
                    <Plus className="w-5 h-5 text-stone-300 group-hover:text-[#2C1E14]" />
                  }
                </div>
              </button>

              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-14 pr-8">
                  <p className="text-stone-500 font-light leading-relaxed text-sm tracking-wide">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-32 relative group overflow-hidden bg-gradient-to-br from-[#2C1E14] to-[#4A3728] p-12 md:p-20 text-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <HelpCircle className="w-32 h-32 text-white" />
          </div>
          <h3 className="relative z-10 text-3xl md:text-5xl font-serif text-white mb-6">
            Still Seeking <span className="italic text-[#A68A64]">Inspiration?</span>
          </h3>
          <p className="relative z-10 text-stone-300 mb-10 max-w-xl mx-auto font-light">
            Our design consultants are available for a private walkthrough of our material library and portfolio.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative z-10 px-12 py-5 bg-[#A68A64] text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-white hover:text-[#2C1E14] transition-all duration-500 shadow-xl"
          >
            Start a Conversation
          </button>
        </div>
      </div>
      
      {/* Decorative Branding */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[22vw] font-serif leading-none text-[#2C1E14] tracking-tighter">ASTRA</h2>
      </div>
    </section>
  );
}