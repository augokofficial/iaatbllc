
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 opacity-[0.03] -z-0">
           <Quote size={300} />
        </div>
        
        <div className="mb-16 relative z-10">
          <h2 className="text-4xl font-serif text-gray-900">Voices of Transformation</h2>
          <p className="text-gray-500 mt-2 font-medium tracking-wide">Real stories from triumphant individuals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl hover:border-brand-primary/5">
              <div>
                <div className="flex text-brand-primary mb-6 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-8 text-lg">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-gray-50 pt-8 mt-4">
                 <div className="w-14 h-14 rounded-full overflow-hidden bg-brand-light border-2 border-white shadow-md">
                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <p className="font-bold text-gray-900 text-lg leading-tight">{t.author}</p>
                    <p className="text-[10px] text-brand-primary uppercase tracking-[0.2em] mt-1 font-extrabold">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
