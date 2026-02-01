import React from 'react';
import { MessageCircle, Instagram, Phone, ArrowUpRight } from 'lucide-react';

export default function ContactDock() {
  const contactData = {
    phone: "+919345445898",
    whatsapp: "919345445898",
    insta: "https://www.instagram.com/astra_.interior/",
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end space-y-4 font-sans">
      
      {/* Contact Labels (Appear on Hover) */}
      <div className="flex flex-col items-end space-y-4 group">
        
        {/* Instagram - Luxe Bronze */}
        <a 
          href={contactData.insta}
          target="_blank" 
          rel="noreferrer"
          className="flex items-center group/item"
        >
          <span className="mr-4 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover/item:opacity-100 transition-all duration-500 translate-x-4 group-hover/item:translate-x-0 shadow-2xl">
            View Gallery
          </span>
          <div className="w-14 h-14 bg-gradient-to-tr from-[#2C1E14] to-[#4A3728] border border-[#A68A64]/30 flex items-center justify-center text-[#A68A64] hover:text-white hover:border-[#A68A64] transition-all duration-500 shadow-2xl rounded-full">
            <Instagram className="w-6 h-6" />
          </div>
        </a>

        {/* WhatsApp - Deep Forest Green */}
        <a 
          href={`https://wa.me/${contactData.whatsapp}?text=I'm interested in an Astra Interior consultation.`}
          target="_blank" 
          rel="noreferrer"
          className="flex items-center group/item"
        >
          <span className="mr-4 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover/item:opacity-100 transition-all duration-500 translate-x-4 group-hover/item:translate-x-0 shadow-2xl">
            WhatsApp Concierge
          </span>
          <div className="w-14 h-14 bg-[#075E54]/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-500 shadow-2xl rounded-full">
            <MessageCircle className="w-6 h-6" />
          </div>
        </a>

        {/* Phone - Solid Espresso */}
        <a 
          href={`tel:${contactData.phone}`}
          className="flex items-center group/item"
        >
          <span className="mr-4 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover/item:opacity-100 transition-all duration-500 translate-x-4 group-hover/item:translate-x-0 shadow-2xl">
            Direct Line
          </span>
          <div className="w-14 h-14 bg-[#2C1E14] border border-[#A68A64]/20 flex items-center justify-center text-[#A68A64] hover:bg-[#A68A64] hover:text-white transition-all duration-500 shadow-2xl rounded-full">
            <Phone className="w-6 h-6" />
          </div>
        </a>

      </div>

      {/* Main Trigger / Label */}
      <div className="mt-4 flex items-center space-x-4 bg-[#FAF9F6] border border-stone-200 pl-6 pr-2 py-2 rounded-full shadow-xl">
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 font-bold">
          Connect <span className="italic font-serif lowercase text-[#A68A64]">with</span> Astra
        </span>
        <div className="w-10 h-10 bg-[#2C1E14] rounded-full flex items-center justify-center animate-bounce-slow">
           <ArrowUpRight className="w-4 h-4 text-[#A68A64]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}