import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { GIFT_DATA } from './mockData';

export const FinalMessage: React.FC = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-pink-100 to-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-md"
      >
        <p className="text-3xl md:text-4xl font-bold text-pink-500 leading-relaxed mb-8">
          {GIFT_DATA.final.text}
        </p>
        
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block text-red-400"
        >
          <Heart size={64} fill="currentColor" />
        </motion.div>
      </motion.div>

      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: "100%", 
              x: Math.random() * 100 + "%", 
              opacity: 0 
            }}
            animate={{ 
              y: "-20%", 
              opacity: [0, 0.5, 0] 
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-pink-200"
          >
            <Heart size={Math.random() * 40 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};