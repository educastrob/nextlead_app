import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-blue sm:text-4xl">
            Sobre Nós
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-blue">
              Transforme sua Presença Digital
            </h3>
            <p className="text-lg text-gray-600">
              Impulsione seu negócio com estratégias digitais personalizadas.
              Ajudamos a aumentar seu faturamento com um fluxo constante de novas 
              oportunidades de negócios e soluções completas de comunicação.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-brand-blue mb-3">Missão</h4>
              <p className="text-gray-600">
                Criar o melhor ecossistema de comunicação sustentável e inovador 
                para pessoas e negócios.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-brand-blue mb-3">Visão</h4>
              <p className="text-gray-600">
                Ser uma referência nacional em negócios e comunicação, conectando 
                resultado, arte e ciência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}