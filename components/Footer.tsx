
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fdfcf9] text-[#1a1a1a] pt-32 pb-16 overflow-hidden border-t border-[#b89c72]/20">
      <div className="container mx-auto px-8 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mb-16"
          >
            <span className="serif text-8xl md:text-[140px] font-light text-[#b89c72] opacity-10 tracking-tighter select-none">DM</span>
            <div className="reveal-mask -mt-12 md:-mt-24">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="serif text-4xl md:text-7xl italic-serif leading-tight text-[#1a1a1a]"
              >
                Celebremos juntos.
              </motion.h2>
            </div>
          </motion.div>
          
          <div className="space-y-10 text-[#444444] font-light leading-relaxed tracking-wide mb-24 max-w-2xl mx-auto italic-serif text-lg md:text-xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Sabemos que un viaje internacional requiere un compromiso significativo. No sientan ninguna obligación; su cariño nos llega de todas las formas posibles a través de la distancia.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-[#1a1a1a] font-medium"
            >
              Esta guía ha sido curada con afecto para que su llegada al paraíso sea tan fluida como la brisa del verano brasileño.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-px bg-[#b89c72]/30 mb-12" />
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] tracking-[0.4em] uppercase font-bold text-[#b89c72] mb-16">
              <a href="#home" className="hover:text-[#1a1a1a] transition-colors underline-offset-4 hover:underline">Inicio</a>
              <a href="#nosotros" className="hover:text-[#1a1a1a] transition-colors underline-offset-4 hover:underline">Nosotros</a>
              <a href="#el-evento" className="hover:text-[#1a1a1a] transition-colors underline-offset-4 hover:underline">Evento</a>
              <a href="#como-llegar" className="hover:text-[#1a1a1a] transition-colors underline-offset-4 hover:underline">Logística</a>
              <a href="#hospedaje" className="hover:text-[#1a1a1a] transition-colors underline-offset-4 hover:underline">Hospedaje</a>
            </div>
            
            <div className="text-[11px] tracking-[0.2em] font-semibold text-[#555555] flex flex-col items-center gap-2">
              <p>DAVID <span className="italic-serif text-[#b89c72] mx-2">&</span> MARIANA — 2027</p>
              <p className="text-[#b89c72]/80">JOÃO PESSOA, PARAÍBA, BRASIL</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
