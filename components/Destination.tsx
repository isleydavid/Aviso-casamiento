
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Destination: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('João Pessoa, Paraíba, Brasil');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="info-card p-12 md:p-24 rounded-lg bg-white border-l-4 border-l-[#b89c72]">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <span className="text-[10px] tracking-[0.5em] text-[#b89c72] uppercase font-semibold block">El Destino</span>
          <div className="flex flex-col items-center gap-4">
            <div className="reveal-mask">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-6xl md:text-8xl serif italic-serif leading-none text-[#1a1a1a]"
              >
                João Pessoa
              </motion.h2>
            </div>
            <button 
              onClick={copyToClipboard}
              className="text-[10px] tracking-[0.3em] font-bold text-[#b89c72] uppercase hover:text-[#1a1a1a] transition-colors"
            >
              {copied ? '¡Nombre Copiado!' : '[Copiar Ciudad]'}
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 text-[#444444] font-light leading-relaxed text-xl italic-serif">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Conocida como la ciudad donde el sol nace primero en las Américas, João Pessoa es un oasis de tranquilidad. La elegimos no solo porque es nuestro hogar actual, sino por su calidad de vida y atmósfera acogedora.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Es un destino ideal tanto para familias como para quienes buscan descansar. Permite disfrutar cada rincón con calma, entre playas cálidas y una gastronomía excepcional.
            </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#b89c72]/20">
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-[0.4em] text-[#b89c72] uppercase font-bold">Ubicación</span>
            <p className="text-sm text-[#555555] font-medium italic-serif">Aeropuerto Castro Pinto (JPA) a solo minutos.</p>
          </div>
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-[0.4em] text-[#b89c72] uppercase font-bold">Ambiente</span>
            <p className="text-sm text-[#555555] font-medium italic-serif">Tranquilo, familiar y acogedor.</p>
          </div>
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-[0.4em] text-[#b89c72] uppercase font-bold">Mar</span>
            <p className="text-sm text-[#555555] font-medium italic-serif">Aguas cálidas y arena clara.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
