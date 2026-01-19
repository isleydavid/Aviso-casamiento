
import React from 'react';
import { motion } from 'framer-motion';

const WeddingInfo: React.FC = () => {
  return (
    <div className="info-card p-12 md:p-24 rounded-lg bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#b89c72]/5 rounded-bl-full pointer-events-none" />
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.5em] text-[#b89c72] uppercase font-semibold block">El Evento</span>
            <div className="reveal-mask">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl serif italic-serif leading-tight text-[#1a1a1a]"
              >
                Temporada <br />Tropical
              </motion.h2>
            </div>
            <p className="text-2xl serif text-[#555555] italic">Confirmado para 2027</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <p className="text-xl text-[#333333] font-light leading-relaxed tracking-wide italic-serif border-l-2 border-[#b89c72] pl-8">
              Hemos elegido los primeros meses de 2027 para nuestra celebración. Es la época donde el sol brilla más fuerte en el Nordeste brasileño.
            </p>
          </motion.div>
        </div>

        <div className="bg-[#fcfaf7] border border-[#b89c72]/20 p-10 space-y-8 rounded-sm shadow-inner">
            <div className="space-y-4">
              <span className="text-[11px] tracking-[0.3em] font-bold text-[#b89c72] uppercase">Enero — Marzo</span>
              <p className="text-base text-[#444444] font-light leading-relaxed">
                Enero y febrero son meses de temporada alta y Carnaval. Queremos darles aviso con tiempo para que puedan planificar su estadía y vuelos con la mayor comodidad posible.
              </p>
            </div>
            <div className="h-px bg-[#b89c72]/20 w-full" />
            <div className="space-y-2">
              <p className="text-[11px] tracking-widest text-[#b89c72] uppercase italic font-medium">Nota Importante</p>
              <p className="text-base text-[#555555] italic-serif">
                Sabemos que están ansiosos por la fecha exacta. La confirmación oficial y la invitación formal llegarán pronto.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInfo;
