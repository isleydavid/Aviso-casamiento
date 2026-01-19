
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <div className="info-card p-12 md:p-24 rounded-lg border-t-4 border-t-[#b89c72]">
      <div className="flex flex-col items-center text-center">
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.5em] text-[#b89c72] uppercase block font-semibold mb-4">Aviso Importante</span>
          <div className="reveal-mask">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="text-5xl md:text-7xl serif italic-serif leading-none text-[#1a1a1a]"
            >
              Nuestro Mensaje
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
            "Queríamos compartir con ustedes una noticia muy especial para nosotros."
          </p>
          
          <div className="h-px w-24 bg-[#b89c72]/30 mx-auto" />
          
          <div className="space-y-6 text-lg md:text-xl text-[#444444] font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
            <p>
              Durante los primeros meses de 2027 (entre enero y marzo), Mariana y yo celebraremos nuestro casamiento en Brasil, en la ciudad donde vivimos actualmente: <span className="text-[#1a1a1a] font-semibold">João Pessoa, en el estado de Paraíba</span>.
            </p>
            <p>
              Este espacio es principalmente informativo. La idea es que puedan visualizar con calma la posibilidad de participar, entendiendo que se trata de un viaje largo y que requiere planificación, especialmente para quienes vienen desde Colombia o Estados Unidos.
            </p>
            <p>
              No hay ningún compromiso: es solo una forma de avisar con tiempo y cariño.
            </p>
            <p className="italic-serif text-[#1a1a1a] font-medium pt-4 border-t border-[#b89c72]/10">
              Para quienes no puedan estar presentes físicamente, el casamiento contará con cobertura online, para que todos los que estén lejos también puedan acompañarnos y compartir ese momento con nosotros.
            </p>
          </div>
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
