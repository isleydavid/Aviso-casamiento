
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <div className="info-card p-12 md:p-24 rounded-lg border-t-4 border-t-[#b89c72]">
      <div className="flex flex-col items-center text-center">
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.5em] text-[#b89c72] uppercase block font-semibold mb-4">Nuestra Historia</span>
          <div className="reveal-mask">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="text-5xl md:text-7xl serif italic-serif leading-none text-[#1a1a1a]"
            >
              Sobre Nosotros
            </motion.h2>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl space-y-10"
        >
          <p className="text-3xl md:text-4xl text-[#1a1a1a]/90 font-light leading-snug serif italic-serif">
            "David, apasionado por los desafíos y la música, y Mariana, amante del diseño y la naturaleza."
          </p>
          
          <div className="h-px w-24 bg-[#b89c72]/30 mx-auto" />
          
          <p className="text-lg md:text-xl text-[#444444] font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
            Actualmente vivimos en la hermosa ciudad de <span className="text-[#1a1a1a] font-semibold">João Pessoa, Brasil</span>, donde hemos encontrado nuestro santuario. Nuestra historia es un cruce de culturas: entre el café de Colombia, el ritmo de Brasil y los horizontes de Estados Unidos.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl pt-12 border-t border-black/10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="serif text-3xl italic-serif mb-2 text-[#1a1a1a]">David</h3>
            <p className="text-[10px] tracking-[0.4em] text-[#b89c72] uppercase font-medium">Residente de Paraíba</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="serif text-3xl italic-serif mb-2 text-[#1a1a1a]">Mariana</h3>
            <p className="text-[10px] tracking-[0.4em] text-[#b89c72] uppercase font-medium">El corazón del sueño</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
