import React, { useState } from 'react';
import { MessageCircle, Phone, Plus, X } from 'lucide-react';

export default function ContactDock() {
  const [isOpen, setIsOpen] = useState(false);

  const contactData = {
    phone: "+919345445898",
    whatsapp: "919345445898",
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end font-sans">
      
      {/* Expanded Actions */}
      <div className={`flex flex-col items-end space-y-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
      }`}>
        
        {/* WhatsApp - Glassmorphism Green */}
        <a 
          href={`https://wa.me/${contactData.whatsapp}?text=I'm interested in an Astra Interior consultation.`}
          target="_blank" 
          rel="noreferrer"
          className="flex items-center group/item"
        >
          <span className="mr-4 px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/10 text-white text-[9px] uppercase tracking-[0.3em] shadow-2xl">
            WhatsApp Concierge
          </span>
          <div className="w-14 h-14 bg-[#075E54]/20 backdrop-blur-2xl border border-green-500/30 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-500 shadow-2xl rounded-full">
            <MessageCircle className="w-6 h-6" />
          </div>
        </a>

        {/* Phone - Deep Espresso */}
        <a 
          href={`tel:${contactData.phone}`}
          className="flex items-center group/item"
        >
          <span className="mr-4 px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/10 text-white text-[9px] uppercase tracking-[0.3em] shadow-2xl">
            Direct Line
          </span>
          <div className="w-14 h-14 bg-[#2C1E14] border border-[#A68A64]/20 flex items-center justify-center text-[#A68A64] hover:bg-[#A68A64] hover:text-white transition-all duration-500 shadow-2xl rounded-full">
            <Phone className="w-6 h-6" />
          </div>
        </a>
      </div>

      {/* Main Multi-Action Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="mt-6 flex items-center space-x-4 bg-[#FAF9F6] border border-stone-200 pl-6 pr-2 py-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] group hover:border-[#A68A64] transition-all duration-500 outline-none"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 font-bold group-hover:text-[#2C1E14] transition-colors">
          {isOpen ? "Close" : "Contact"} <span className="italic font-serif lowercase text-[#A68A64] ml-1">Studio</span>
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 ${
          isOpen ? "bg-[#A68A64] rotate-90" : "bg-[#2C1E14]"
        }`}>
           {isOpen ? <X className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-[#A68A64]" />}
        </div>
      </button>

      {/* Background Pulse Effect when Closed */}
      {!isOpen && (
        <div className="absolute bottom-1 right-1 w-12 h-12 bg-[#A68A64]/20 rounded-full animate-ping pointer-events-none" />
      )}
    </div>
  );
}