import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-light opacity-60 rounded-bl-[100px] animate-soft-pulse" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] animate-soft-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-brand-primary/10 px-4 py-1.5 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              <span>Coaching • Speaking • Resilience</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-8">
              Unfold Your <br />
              <span className="italic text-brand-primary">True Potential.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
              I Am A Triumphant Butterfly provides the sanctuary and strategy you need to emerge from life's cocoon with unshakeable purpose and clarity.
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
            {/* The Image Container - No white border, strictly using hero1.png at root */}
            <div className="relative aspect-video lg:aspect-[16/9] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(145,95,55,0.25)] z-10 group bg-brand-light">
              <img 
                src="hero1.png" 
                alt="I Am A Triumphant Butterfly" 
                className="block w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                loading="eager"
              />
              {/* Subtle visual protection layer */}
              <div className="absolute inset-0 bg-brand-dark/5 opacity-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
            </div>
            
            {/* Floating Trust Card */}
            <div className="absolute -bottom-10 -left-6 lg:-left-12 bg-white/95 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-2xl z-20 max-w-[280px] border border-brand-primary/10 transition-all duration-500 hover:-translate-y-2">
               <div className="flex gap-1 mb-3">
                 {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-brand-primary" />)}
               </div>
               <p className="text-brand-dark font-serif italic text-lg mb-3 leading-tight">"A life-changing journey of self-discovery and growth."</p>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-light border border-brand-primary/20 overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=32" alt="client avatar" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Verified Client</p>
               </div>
            </div>

            {/* Floating Graphic Element */}
            <div className="absolute -top-6 -right-4 bg-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 border border-brand-primary/5 animate-float-slow">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Live Coaching Session</span>
            </div>

            {/* Decorative Background Floaties */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl animate-soft-pulse" />
            <div className="absolute top-1/4 -left-12 w-24 h-24 border-4 border-brand-primary/10 rounded-full animate-float-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};