import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-[#FAF7F2] opacity-70 rounded-bl-[120px] animate-soft-pulse" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-full max-w-2xl h-96 bg-[#915F37]/5 rounded-full blur-[120px] animate-soft-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-brand-primary/10 px-4 py-1.5 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              <span>Certified Coaching • Resilience Training</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-8">
              Unfold Your <br />
              <span className="italic text-brand-primary">True Potential.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light max-w-lg">
              I Am A Triumphant Butterfly provides the sanctuary and strategic guidance you need to emerge from life's cocoon with unshakeable purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-primary text-white font-bold rounded-full hover:bg-opacity-90 transition-all shadow-xl shadow-brand-primary/30 group text-lg"
              >
                Book Discovery Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-brand-primary text-brand-primary font-bold rounded-full hover:bg-brand-light transition-all text-lg"
              >
                Our Services
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 py-8 border-t border-gray-100">
               {[
                 'Personalized Roadmap', 
                 'Holistic Wellness', 
                 'Expert Guidance', 
                 'Supportive Community'
               ].map((item) => (
                 <div key={item} className="flex items-center gap-3 text-gray-600">
                   <div className="bg-brand-primary/10 p-1 rounded-full">
                    <CheckCircle className="text-brand-primary w-4 h-4" />
                   </div>
                   <span className="text-sm font-semibold tracking-tight">{item}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 mb-12 lg:mb-0">
            {/* The Image Container */}
            <div className="relative aspect-[4/3] lg:aspect-[1.4/1] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(145,95,55,0.25)] z-10 group bg-[#F8F5F1]">
              
              {/* Using local webp file as requested */}
              <img 
                src="hero1.webp"
                alt="A professional Black female coach conducting an empowering session with a Hispanic female client in a bright, modern living room" 
                className="block w-full h-full object-cover object-[40%_center] transform group-hover:scale-105 transition-transform duration-[3s] ease-out"
                fetchPriority="high"
                decoding="sync"
              />
              
              {/* Subtle Overlay to help visual hierarchy */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Trust Card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white/95 backdrop-blur-md p-6 lg:p-8 rounded-3xl shadow-2xl z-20 max-w-[260px] border border-brand-primary/10 transition-all duration-500 hover:-translate-y-2">
               <div className="flex gap-1 mb-3">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" className="text-brand-primary" />)}
               </div>
               <p className="text-brand-dark font-serif italic text-base mb-4 leading-tight">"A life-changing journey of growth and discovery."</p>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light border border-brand-primary/20 overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=32" alt="client avatar" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Verified Success</p>
                    <p className="text-[10px] text-brand-primary font-bold">200+ Transformations</p>
                  </div>
               </div>
            </div>

            {/* Floating Decorative Element */}
            <div className="absolute -top-6 -left-4 bg-white px-5 py-3 rounded-full shadow-lg z-20 flex items-center gap-3 border border-brand-primary/5 animate-float-slow">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Live Resilience Session</span>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl animate-soft-pulse" />
            <div className="absolute top-1/3 -left-16 w-32 h-32 border-[6px] border-brand-primary/5 rounded-full animate-float-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};