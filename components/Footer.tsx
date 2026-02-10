import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Logo } from './Header.tsx';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-10 h-10" usePNG={true} />
              <span className="text-xl font-serif font-bold text-gray-800 tracking-tight">I Am A Triumphant Butterfly</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              A holistic coaching practice dedicated to guiding you through life's most challenging transitions toward a future of purpose and peace.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm hover:shadow-md hover:bg-brand-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm hover:shadow-md hover:bg-brand-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm hover:shadow-md hover:bg-brand-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm hover:shadow-md hover:bg-brand-primary hover:text-white transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Coaching Services</a></li>
              <li><a href="#testimonials" className="hover:text-brand-primary transition-colors">Success Stories</a></li>
              <li><a href="#booking" className="hover:text-brand-primary transition-colors">Book a Call</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} I Am A Triumphant Butterfly. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-xs italic">
            Developed with purpose & grace.
          </p>
        </div>
      </div>
    </footer>
  );
};