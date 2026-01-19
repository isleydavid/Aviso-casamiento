
import React from 'react';
import { motion } from 'framer-motion';

const FlightEstimates: React.FC = () => {
  const colombiaRoutes = [
    { origin: 'Cali (CLO)', dest: 'JPA/REC', currency: 'COP', estimates: [
      { month: 'Enero', range: '$3.5M - $4.5M' },
      { month: 'Febrero', range: '$2.8M - $3.8M' },
      { month: 'Marzo', range: '$2.5M - $3.2M' },
    ]}
  ];

  const usaRoutes = [
    { origin: 'Miami (MIA)', dest: 'JPA/REC', currency: 'USD', estimates: [
      { month: 'Enero', range: '$800 - $1100' },
      { month: 'Febrero', range: '$700 - $950' },
      { month: 'Marzo', range: '$600 - $850' },
    ]},
    { origin: 'New York (JFK)', dest: 'JPA/REC', currency: 'USD', estimates: [
      { month: 'Enero', range: '$1000 - $1300' },
      { month: 'Febrero', range: '$900 - $1200' },
      { month: 'Marzo', range: '$800 - $1050' },
    ]}
  ];

  return (
    <div className="info-card p-12 md:p-24 rounded-lg bg-white">
      <div className="text-center mb-20">
        <span className="text-[10px] tracking-[0.5em] text-[#b89c72] uppercase block font-semibold mb-4">Planificación</span>
        <div className="reveal-mask">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl serif italic-serif leading-none text-[#1a1a1a]"
          >
            Estimativa de Vuelos
          </motion.h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="flex justify-between items-center border-b border-[#b89c72]/30 pb-4">
            <span className="text-[12px] tracking-[0.4em] text-[#1a1a1a] uppercase font-bold block">Desde Colombia</span>
            <span className="text-[10px] text-[#b89c72] font-bold tracking-widest bg-[#b89c72]/5 px-2 py-0.5 rounded">COP</span>
          </div>
          {colombiaRoutes.map((route, i) => (
            <div key={i} className="space-y-8">
              <div className="space-y-4">
                {route.estimates.map((est, idx) => (
                  <div key={idx} className="flex justify-between items-baseline group py-3 border-b border-[#b89c72]/10">
                    <span className="serif text-3xl italic-serif text-[#333333] group-hover:text-[#b89c72] transition-colors">{est.month}</span>
                    <span className="serif text-2xl text-[#1a1a1a] font-medium">{est.range} <span className="text-xs font-sans text-[#b89c72]">COP</span></span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <div className="flex justify-between items-center border-b border-[#b89c72]/30 pb-4">
            <span className="text-[12px] tracking-[0.4em] text-[#1a1a1a] uppercase font-bold block">Desde Estados Unidos</span>
            <span className="text-[10px] text-[#b89c72] font-bold tracking-widest bg-[#b89c72]/5 px-2 py-0.5 rounded">USD</span>
          </div>
          <div className="space-y-16">
            {usaRoutes.map((route, i) => (
              <div key={i} className="space-y-6">
                <span className="text-[11px] tracking-widest text-[#b89c72] uppercase block font-bold mb-4">{route.origin}</span>
                <div className="space-y-4">
                  {route.estimates.map((est, idx) => (
                    <div key={idx} className="flex justify-between items-baseline group py-3 border-b border-[#b89c72]/10">
                      <span className="serif text-3xl italic-serif text-[#333333] group-hover:text-[#b89c72] transition-colors">{est.month}</span>
                      <span className="serif text-2xl text-[#1a1a1a] font-medium">{est.range} <span className="text-xs font-sans text-[#b89c72]">USD</span></span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-center text-[10px] tracking-[0.3em] text-[#b89c72] uppercase italic font-medium max-w-lg mx-auto">
        Valores estimados por persona, basados en promedios históricos. Sujetos a variaciones por temporada y anticipación.
      </div>
    </div>
  );
};

export default FlightEstimates;
