
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Accommodation: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const recommendedVenue = "Paraíso del Atlántico";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="info-card rounded-lg overflow-hidden bg-white border-b-4 border-b-[#b89c72]">
      <div className="text-center p-12 md:p-20 border-b border-[#b89c72]/10">
        <span className="text-[10px] tracking-[0.5em] text-[#b89c72] uppercase block font-semibold mb-4">Hospedaje</span>
        <div className="reveal-mask">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl serif italic-serif leading-none text-[#1a1a1a]"
          >
            Dónde Dormir
          </motion.h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-px bg-[#b89c72]/10">
        <div className="lg:col-span-7 bg-white p-12 md:p-20 space-y-12">
          <div className="space-y-6">
            <span className="text-[11px] tracking-[0.4em] text-[#b89c72] uppercase font-bold block">Opción Recomendada</span>
            <h3 className="serif text-5xl md:text-6xl italic-serif text-[#1a1a1a] leading-tight">
              {recommendedVenue}
            </h3>
            <button 
              onClick={() => copyToClipboard(recommendedVenue)}
              className="text-[11px] tracking-widest uppercase text-[#b89c72] hover:text-[#9c845d] transition-colors flex items-center gap-3 group font-bold"
            >
              <div className="w-8 h-px bg-[#b89c72] group-hover:w-12 transition-all" />
              {copiedText === recommendedVenue ? '¡Nombre Copiado!' : 'Click para copiar nombre'}
            </button>
          </div>
          
          <p className="text-2xl text-[#333333] font-light leading-relaxed max-w-xl italic-serif">
            Un complejo residencial de lujo estilo resort directamente frente al mar en Ponta de Campina. 
            Es nuestra opción favorita por su seguridad, cercanía y áreas sociales inmejorables.
          </p>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-[#b89c72]/10">
            <div>
              <span className="text-[11px] tracking-widest text-[#b89c72] uppercase block mb-3 font-bold">Temporada Baja</span>
              <p className="serif text-3xl italic-serif text-[#444444]">~ $120 / noche <span className="text-xs font-sans text-[#b89c72]">USD</span></p>
            </div>
            <div>
              <span className="text-[11px] tracking-widest text-[#b89c72] uppercase block mb-3 font-bold">Enero — Marzo</span>
              <p className="serif text-3xl italic-serif text-[#1a1a1a] font-medium">~ $220 / noche <span className="text-xs font-sans text-[#b89c72]">USD</span></p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#fcfaf7] p-12 md:p-20 flex flex-col justify-center">
          <div className="space-y-16">
            <div className="space-y-8">
              <span className="text-[11px] tracking-[0.4em] text-[#b89c72] uppercase block font-bold">Barrios Sugeridos</span>
              <ul className="space-y-6 serif text-3xl italic-serif text-[#444444]">
                {[
                  { name: 'Ponta de Campina', search: 'Ponta de Campina, Cabedelo, Brasil' },
                  { name: 'Bessa', search: 'Bessa, João Pessoa, Brasil' },
                  { name: 'Intermares', search: 'Intermares, Cabedelo, Brasil' }
                ].map((zone) => (
                  <li key={zone.name} className="flex justify-between items-center group border-b border-[#b89c72]/20 pb-2">
                    <span className="group-hover:text-[#b89c72] transition-colors cursor-default">{zone.name}</span>
                    <button 
                      onClick={() => copyToClipboard(zone.search)}
                      className="text-[9px] text-[#b89c72] hover:text-[#1a1a1a] transition-colors tracking-widest uppercase font-bold"
                    >
                      {copiedText === zone.search ? 'Listo!' : '[Copiar]'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[12px] text-[#555555] leading-relaxed font-medium tracking-widest uppercase italic-serif border-l-2 border-[#b89c72] pl-6">
              Recomendamos priorizar Airbnb o Booking en estas zonas para estar cerca de los puntos de encuentro principales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
