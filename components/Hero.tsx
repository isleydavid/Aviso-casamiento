
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#fdfcf9]">
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="mb-12"
        >
          <span className="text-[10px] tracking-[0.6em] font-medium uppercase text-[#b89c72]">
            Casamiento en Brasil — 2027
          </span>
        </motion.div>
        
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-px bg-[#b89c72]/40 mb-8"
          />
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-7xl md:text-[140px] leading-[0.8] serif tracking-tighter mb-4 text-[#1a1a1a]"
          >
            David <span className="italic-serif text-5xl md:text-[100px] block md:inline text-[#b89c72] opacity-90">&</span> Mariana
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            className="h-px w-48 bg-[#b89c72]/30 my-12"
          />
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-[12px] tracking-[0.6em] font-light uppercase text-[#555555] mb-16"
          >
            JOÃO PESSOA, PARAÍBA
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-base md:text-lg font-light leading-relaxed tracking-wider text-[#555555] italic-serif">
            Queremos compartir una noticia muy especial. El 2027 será nuestro año y el destino, nuestro amado Brasil. Este espacio ha sido creado para ayudarlos a planificar este viaje con todo el amor y anticipación.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
