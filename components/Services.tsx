
import React from 'react';
import { SERVICES } from '../constants';

const LifeCoachingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
    <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
    <path d="M12 9V10" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 14V15" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 12H10" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 12H15" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WellnessCoachingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C12 21 4 16 4 9C4 5.5 7 4 9 4C10.5 4 11.5 5 12 6C12.5 5 13.5 4 15 4C17 4 20 5.5 20 9C20 16 12 21 12 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 9C12 9 10.5 7.5 8 8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M12 9C12 9 13.5 10.5 16 10" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <circle cx="12" cy="9" r="0.5" fill="currentColor" />
  </svg>
);

const SpeakingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="3" width="6" height="11" rx="3" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    <path d="M5 10C5 13.866 8.13401 17 12 17C15.866 17 19 13.866 19 10" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 17V21M8 21H16" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 7V9" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const iconMap = {
  Compass: <LifeCoachingIcon />,
  Heart: <WellnessCoachingIcon />,
  Mic: <SpeakingIcon />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">Coaching & Speaking</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the path that aligns with your current needs, from deep personal discovery to professional group empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-10 rounded-[3rem] border border-gray-100 bg-white transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(145,95,55,0.15)] hover:bg-[#FDF8F4] hover:border-brand-primary/10"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 bg-brand-light rounded-3xl flex items-center justify-center text-brand-primary mb-10 transition-all duration-500 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                  {iconMap[service.icon as keyof typeof iconMap]}
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-5 group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-10 flex-grow">
                  {service.description}
                </p>
                <a 
                  href="#booking" 
                  className="inline-flex items-center text-brand-primary font-bold transition-all duration-300 uppercase tracking-[0.2em] text-[0.75rem] hover:tracking-[0.3em] group/btn"
                >
                  {service.cta || 'Book Now'} 
                  <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
