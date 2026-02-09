import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, PartyPopper, ArrowRight } from 'lucide-react';
import { TIDYCAL_URL } from '../constants.ts';

interface BookingProps {
  id: string;
}

export const Booking: React.FC<BookingProps> = ({ id }) => {
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    const handleTidyCalMessage = (event: MessageEvent) => {
      // TidyCal emits messages to parent frames on booking.
      if (typeof event.data === 'string' && event.data.includes('booked')) {
        setIsBooked(true);
      }
      // Specific TidyCal event checks if needed
      if (event.origin.includes('tidycal.com')) {
         console.debug('TidyCal Event:', event.data);
      }
    };

    window.addEventListener('message', handleTidyCalMessage);
    return () => window.removeEventListener('message', handleTidyCalMessage);
  }, []);

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-brand-dark rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(74,50,34,0.3)] flex flex-col lg:flex-row transition-all duration-700 ${isBooked ? 'success-bg-glow scale-[1.02]' : ''}`}>
          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-24 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.05]" aria-hidden="true">
              <svg className="absolute -top-20 -right-20 w-[120%] h-[120%] rotate-12" viewBox="0 0 100 100" fill="none">
                <path d="M10,80 C30,20 90,0 100,10 C100,30 60,90 10,80Z" fill="white" />
                <path d="M0,90 C10,60 40,50 50,70 C50,90 20,110 0,90Z" fill="white" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl lg:text-6xl font-serif leading-tight">
                  {isBooked ? "Your Flight " : "Start Your "}
                  <span className="text-brand-secondary italic">{isBooked ? "Begins Now" : "Triumph"}</span>
                </h2>
                {isBooked && <PartyPopper className="text-brand-secondary w-12 h-12 animate-bounce" />}
              </div>
              
              <div className="min-h-[8rem]">
                {isBooked ? (
                  <div className="animate-fade-in">
                    <p className="text-2xl text-white font-serif mb-6">Discovery Call Confirmed!</p>
                    <p className="text-brand-secondary text-lg font-light leading-relaxed mb-10 max-w-md">
                      Check your inbox for your calendar invitation. I can't wait to see your wings unfold.
                    </p>
                  </div>
                ) : (
                  <p className="text-brand-secondary/90 text-xl mb-12 font-light leading-relaxed max-w-md">
                    Your journey to unshakeable resilience starts with a 30-minute conversation. No pressure, just possibilities.
                  </p>
                )}
              </div>
              
              <div className="space-y-6 mb-12">
                {[
                  '30-Minute Deep Dive', 
                  'Personalized Growth Roadmap', 
                  'Direct Coaching Experience', 
                  'Next-Step Implementation'
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-5 group">
                     <div className={`transition-all duration-500 ${isBooked ? 'animate-check-pop' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
                        <CheckCircle2 className={`w-7 h-7 ${isBooked ? 'text-green-400' : 'text-brand-secondary'}`} />
                     </div>
                     <span className="text-lg font-medium text-white/95">
                       {item}
                     </span>
                  </div>
                ))}
              </div>
              
              {!isBooked && (
                <div className="flex items-center gap-4 text-brand-secondary/70 text-sm font-bold uppercase tracking-widest">
                   <Calendar className="w-5 h-5" />
                   <span>Limited Slots Available This Month</span>
                </div>
              )}
            </div>
          </div>

          {/* Iframe Side */}
          <div className="lg:w-1/2 bg-white min-h-[700px] relative border-l border-brand-primary/10">
            <iframe 
               src={TIDYCAL_URL} 
               className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-1000 ${isBooked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
               title="Book an appointment"
               loading="lazy"
            ></iframe>
            
            {isBooked && (
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center bg-brand-light/30 backdrop-blur-md">
                <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-sm border border-brand-primary/10">
                   <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl animate-pulse">
                      <CheckCircle2 size={48} />
                   </div>
                   <h3 className="text-4xl font-serif text-brand-dark mb-4">You're Set!</h3>
                   <p className="text-gray-600 mb-8 leading-relaxed">Prepare for our call by jotting down your biggest transition challenge.</p>
                   <button onClick={() => setIsBooked(false)} className="text-brand-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto hover:gap-4 transition-all">
                      Need another time? <ArrowRight size={14} />
                   </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};