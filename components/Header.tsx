
import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 40C50 40 45 20 25 20C5 20 5 45 25 55C15 65 20 85 40 80C45 78 50 70 50 70C50 70 55 78 60 80C80 85 85 65 75 55C95 45 95 20 75 20C55 20 50 40 50 40Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 35V75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M42 30C42 30 44 25 50 25C56 25 58 30 58 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
             <Logo className="w-12 h-12 text-brand-primary" />
             <div className="flex flex-col">
               <span className="text-xl font-serif font-bold text-gray-800 tracking-tight leading-none">I Am A</span>
               <span className="text-xl font-serif font-bold text-brand-primary tracking-tight leading-none">Triumphant Butterfly</span>
             </div>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-primary transition-colors font-medium text-sm uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 text-sm font-semibold shadow-md"
            >
              Book Now <ChevronRight className="w-4 h-4" />
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brand-primary text-white px-6 py-4 rounded-lg font-bold shadow-lg"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
