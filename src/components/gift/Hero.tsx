import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { GIFT_DATA } from './mockData';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: "100vh", 
              x: Math.random() * 100 + "%", 
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute text-pink-200"
          >
            <Heart size={Math.random() * 30 + 20} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-md"
      >
        <div className="mb-6 flex justify-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Sparkles className="text-yellow-400 w-12 h-12" />
          </motion.div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4 leading-tight font-display rounded-xl">
          {GIFT_DATA.hero.title}
        </h1>
        
        <p className="text-xl text-purple-400 font-medium">
          {GIFT_DATA.hero.subtitle}
        </p>

        <motion.div 
          className="mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-gray-400 uppercase tracking-widest">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full mx-auto mt-2 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};