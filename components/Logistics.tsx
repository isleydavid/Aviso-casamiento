
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Logistics: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <span className="text-[10px] tracking-[0.5em] text-[#b89c72] uppercase block font-semibold mb-4">La Travesía</span>
        <div className="reveal-mask">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl serif italic-serif leading-none text-[#1a1a1a]"
          >
            Cómo Llegar
          </motion.h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="info-card p-12 md:p-16 space-y-8 rounded-lg border-b-2 border-b-[#b89c72]/30"
        >
          <span className="text-[11px] tracking-[0.4em] text-[#b89c72] uppercase block font-bold">Opción 01</span>
          <div className="space-y-2">
            <h3 className="serif text-4xl italic-serif text-[#1a1a1a]">Directo a <br />João Pessoa</h3>
            <button 
              onClick={() => copyToClipboard('João Pessoa')}
              className="text-[9px] text-[#b89c72] hover:text-[#1a1a1a] transition-colors tracking-widest uppercase font-bold"
            >
              {copiedText === 'João Pessoa' ? 'Copiado!' : '[Copiar Ciudad]'}
            </button>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[11px] tracking-[0.2em] font-bold text-[#b89c72] uppercase bg-[#b89c72]/5 px-3 py-1 inline-block rounded-sm">Aeropuerto Castro Pinto (JPA)</p>
            <button 
              onClick={() => copyToClipboard('Aeropuerto Internacional Presidente Castro Pinto')}
              className="text-[9px] text-[#b89c72] hover:text-[#1a1a1a] transition-colors tracking-widest uppercase font-bold"
            >
              {copiedText === 'Aeropuerto Internacional Presidente Castro Pinto' ? 'Copiado!' : '[Copiar Aeropuerto]'}
            </button>
          </div>
          <div className="h-px w-16 bg-[#b89c72]/30" />
          <ul className="space-y-5 text-[#444444] font-light text-base italic-serif">
            <li className="flex items-start gap-3"><span className="text-[#b89c72] mt-1">✦</span> Llegas directo a la ciudad del evento.</li>
            <li className="flex items-start gap-3"><span className="text-[#b89c72] mt-1">✦</span> Traslado de solo 25-30 min a la zona recomendada.</li>
            <li className="text-[#b89c72] pt-6 border-t border-[#b89c72]/10 uppercase text-[10px] tracking-widest not-italic font-semibold">Vía São Paulo / Rio</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="info-card p-12 md:p-16 space-y-8 rounded-lg border-b-2 border-b-[#b89c72]/30"
        >
          <span className="text-[11px] tracking-[0.4em] text-[#b89c72] uppercase block font-bold">Opción 02</span>
          <div className="space-y-2">
            <h3 className="serif text-4xl italic-serif text-[#1a1a1a]">Recife <br />+ Traslado</h3>
            <button 
              onClick={() => copyToClipboard('Recife')}
              className="text-[9px] text-[#b89c72] hover:text-[#1a1a1a] transition-colors tracking-widest uppercase font-bold"
            >
              {copiedText === 'Recife' ? 'Copiado!' : '[Copiar Ciudad]'}
            </button>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[11px] tracking-[0.2em] font-bold text-[#b89c72] uppercase bg-[#b89c72]/5 px-3 py-1 inline-block rounded-sm">Aeropuerto Guararapes (REC)</p>
            <button 
              onClick={() => copyToClipboard('Aeropuerto Internacional de Recife/Guararapes')}
              className="text-[9px] text-[#b89c72] hover:text-[#1a1a1a] transition-colors tracking-widest uppercase font-bold"
            >
              {copiedText === 'Aeropuerto Internacional de Recife/Guararapes' ? 'Copiado!' : '[Copiar Aeropuerto]'}
            </button>
          </div>
          <div className="h-px w-16 bg-[#b89c72]/30" />
          <ul className="space-y-5 text-[#444444] font-light text-base italic-serif">
            <li className="flex items-start gap-3"><span className="text-[#b89c72] mt-1">✦</span> Más rutas internacionales (vía Panamá).</li>
            <li className="flex items-start gap-3"><span className="text-[#b89c72] mt-1">✦</span> Traslado de ~2 horas en auto o transfer privado.</li>
            <li className="text-[#b89c72] pt-6 border-t border-[#b89c72]/10 uppercase text-[10px] tracking-widest not-italic font-semibold">Hub Nordeste</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Logistics;
