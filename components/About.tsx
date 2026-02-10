import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Subtle background logo watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <img 
          src="https://www.genspark.ai/api/files/s/AVFyfNlQ" 
          alt="" 
          className="w-[600px] h-[600px]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-8">Unfold Your Wings</h2>
          <p className="text-xl text-gray-600 mb-16 leading-relaxed">
            I Am A Triumphant Butterfly is dedicated to the art of transformation. We understand that personal growth isn't just about changing; it's about emerging. Like the butterfly, your most significant growth often happens within the cocoon of resilience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 text-left">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/5 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-brand-primary w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Clarity of Vision</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Identifying what truly matters to you and stripping away the noise of expectation.</p>
             </div>
             
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/5 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6">
                  <Zap className="text-brand-primary w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Actionable Growth</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Moving from thought to execution with strategic steps tailored to your lifestyle.</p>
             </div>
             
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/5 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="text-brand-primary w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Unwavering Support</h4>
                <p className="text-gray-500 text-sm leading-relaxed">A professional partnership built on trust, accountability, and the belief in your triumph.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};