import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-radial from-brand-blue-light to-brand-blue pt-32 pb-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transforme sua</span>
            <span className="block text-brand-yellow">Presença Digital</span>
          </h1>
          <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-xl">
            Impulsione seu negócio com estratégias digitais personalizadas. 
            Marketing digital, tráfego pago, social media e desenvolvimento web 
            para fazer sua empresa crescer.
          </p>
          <div className="mt-8">
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-blue font-medium rounded-full transition-all transform hover:scale-105"
            >
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}