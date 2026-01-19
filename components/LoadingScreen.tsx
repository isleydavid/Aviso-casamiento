
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-0 z-[100] bg-[#fdfcf9] flex flex-col items-center justify-center"
    >
      <div className="flex items-center serif text-7xl md:text-9xl text-[#1a1a1a] tracking-widest">
        <motion.span
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
        >
          D
        </motion.span>
        
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            opacity: { duration: 1.2, delay: 0.6 },
            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="italic-serif text-4xl md:text-6xl mx-6 text-[#b89c72]"
        >
          &
        </motion.span>
        
        <motion.span
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
        >
          M
        </motion.span>
      </div>
      
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "160px", opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
        className="h-px bg-[#b89c72]/30 mt-12"
      />
      
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="text-[10px] tracking-[0.5em] uppercase text-[#b89c72] mt-8 font-bold"
      >
        João Pessoa 2027
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
