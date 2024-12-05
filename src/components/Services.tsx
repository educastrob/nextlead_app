import React from 'react';
import { Megaphone, Globe, PenTool, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Marketing Digital',
    description: 'Estratégias completas para aumentar sua visibilidade online e gerar mais leads qualificados.',
    icon: Megaphone,
  },
  {
    title: 'Tráfego Pago',
    description: 'Campanhas otimizadas no Google Ads e Meta Ads para maximizar seu ROI.',
    icon: BarChart,
  },
  {
    title: 'Social Media',
    description: 'Gestão profissional das suas redes sociais para engajar seu público-alvo.',
    icon: Globe,
  },
  {
    title: 'Design & Landing Pages',
    description: 'Criação de landing pages convertedoras e design visual impactante.',
    icon: PenTool,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-blue sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Soluções completas para impulsionar seu negócio no ambiente digital
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-brand-blue rounded-lg shadow-lg group-hover:bg-brand-yellow transition-colors">
                  <service.icon className="h-6 w-6 text-white group-hover:text-brand-blue" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-brand-blue">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}