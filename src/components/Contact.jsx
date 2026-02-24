import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { Mail, Phone, MapPin, Send, Clock, Home } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState("");
  const navigate = useNavigate(); // 2. Initialize navigate

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "ebb6356a-ccd3-4584-9c7a-98cec10bbc98");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Inquiry Sent Successfully!");
        event.target.reset();
        
        // 3. Redirect to Thank You page after a tiny delay
        setTimeout(() => {
          navigate('/thank-you');
        }, 1000); 

      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Form submission failed. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#FAF9F6] overflow-hidden font-sans"
    >
      {/* SVG BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="site-plan" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 200 0 M 0 0 L 0 200" fill="none" stroke="#2C1E14" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#A68A64" strokeWidth="0.5" strokeDasharray="5 5" />
            <path d="M 100 60 L 100 140 M 60 100 L 140 100" stroke="#A68A64" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#site-plan)" />
        </svg>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A68A64]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-[1px] bg-[#A68A64]"></div>
            <span className="text-[#A68A64] uppercase tracking-[0.5em] text-xs font-bold">Inquiry</span>
            <div className="w-12 h-[1px] bg-[#A68A64]"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif text-[#2C1E14] leading-none tracking-tighter mb-8">
            Begin Your <br />
            <span className="italic bg-gradient-to-r from-[#2C1E14] via-[#A68A64] to-[#2C1E14] bg-clip-text text-transparent pb-2">
              Sanctuary
            </span>
          </h2>
          <p className="text-stone-500 text-xl font-light max-w-2xl mx-auto leading-relaxed italic">
            "We are currently accepting bespoke projects for the 2026 season."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 shadow-[30px_30px_60px_-15px_rgba(44,30,20,0.08)] border border-stone-50">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full pb-4 bg-transparent border-b border-stone-200 text-[#2C1E14] focus:outline-none focus:border-[#A68A64] transition-colors placeholder:text-stone-300"
                    placeholder="E.g. Alexander Thorne"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full pb-4 bg-transparent border-b border-stone-200 text-[#2C1E14] focus:outline-none focus:border-[#A68A64] transition-colors placeholder:text-stone-300"
                    placeholder="alexander@prestige.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Project Type</label>
                <select
                  name="projectType"
                  className="w-full pb-4 bg-transparent border-b border-stone-200 text-[#2C1E14] focus:outline-none focus:border-[#A68A64] transition-colors"
                >
                  <option value="Residential Renovation">Residential Renovation</option>
                  <option value="Commercial/Office Space">Commercial/Office Space</option>
                  <option value="Custom Furniture Commission">Custom Furniture Commission</option>
                  <option value="Full Interior Transformation">Full Interior Transformation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Project Vision</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full pb-4 bg-transparent border-b border-stone-200 text-[#2C1E14] focus:outline-none focus:border-[#A68A64] transition-colors resize-none placeholder:text-stone-300"
                  placeholder="Describe your aesthetic goals..."
                />
              </div>

              <button 
                type="submit" 
                className="group relative w-full py-6 bg-[#2C1E14] text-white flex items-center justify-center space-x-4 overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10 uppercase tracking-[0.4em] text-xs font-bold">Send Private Inquiry</span>
                <Send className="relative z-10 w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-[#A68A64] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              
              {result && (
                <p className={`text-center text-xs uppercase tracking-widest font-bold mt-4 ${result.includes("Successfully") ? "text-green-600" : "text-[#A68A64]"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-[#2C1E14] text-white p-12 shadow-2xl relative overflow-hidden">
              <Home className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 opacity-10" />
              <h3 className="text-3xl font-serif mb-10 relative z-10">The Design Atelier</h3>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-6">
                  <MapPin className="w-6 h-6 text-[#A68A64] mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A68A64] font-bold mb-2">Location</p>
                    <p className="text-stone-300 font-light">Race Course, Coimbatore<br />Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <Mail className="w-6 h-6 text-[#A68A64] mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A68A64] font-bold mb-2">Email</p>
                    <p className="text-stone-300 font-light">astrainterior83@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <Phone className="w-6 h-6 text-[#A68A64] mt-1" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A68A64] font-bold mb-2">Private Line</p>
                    <p className="text-stone-300 font-light">+91 93454 45898</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 border border-stone-200">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-5 h-5 text-[#A68A64]" />
                <h4 className="font-serif text-[#2C1E14] text-xl italic">Availability</h4>
              </div>
              <div className="space-y-3 text-stone-500 text-sm font-light">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span>Monday — Friday</span>
                  <span className="text-[#2C1E14]">09:00 — 18:00</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span>Saturday</span>
                  <span className="text-[#2C1E14]">10:00 — 16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}