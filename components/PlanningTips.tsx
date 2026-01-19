
import React from 'react';
import { motion } from 'framer-motion';

const PlanningTips: React.FC = () => {
  const tips = [
    { 
      title: 'Estadía', 
      desc: 'Recomendamos entre 5 y 7 días para disfrutar del evento y la ciudad con calma.' 
    },
    { 
      title: 'Clima', 
      desc: 'Verano brasileño. Sol intenso y brisa marina constante (26°C - 31°C).' 
    },
    { 
      title: 'Vestimenta', 
      desc: 'Casual chic. Lino, algodón y colores claros para máxima comodidad tropical.' 
    }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center">
        <span className="text-[10px] tracking-[0.5em] text-[#b89c72] uppercase block font-semibold mb-4">Sugerencias</span>
        <div className="reveal-mask">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl serif italic-serif leading-none text-[#1a1a1a]"
          >
            Detalles Importantes
          </motion.h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tips.map((tip, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="info-card p-12 text-center flex flex-col items-center justify-center space-y-6 rounded-lg border-t-2 border-t-[#b89c72]/40"
          >
            <h3 className="serif text-3xl italic-serif text-[#1a1a1a]">{tip.title}</h3>
            <p className="text-[#444444] text-base font-light leading-relaxed italic-serif">{tip.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="info-card p-12 md:p-20 text-center rounded-lg bg-white border-l-4 border-l-[#b89c72]"
      >
        <p className="text-3xl serif italic-serif text-[#555555] max-w-3xl mx-auto leading-relaxed">
          "Nuestra idea es que este viaje sea una oportunidad para unas vacaciones inolvidables. João Pessoa invita a bajar el ritmo y disfrutar del paraíso."
        </p>
      </motion.div>
    </div>
  );
};

export default PlanningTips;
