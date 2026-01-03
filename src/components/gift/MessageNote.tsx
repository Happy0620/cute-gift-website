import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { GIFT_DATA } from './mockData';

export const MessageNote: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-pink-50 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-md w-full p-8 rounded-3xl shadow-xl relative transform rotate-1"
      >
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 text-pink-300 transform -rotate-12">
          <Heart size={40} fill="currentColor" />
        </div>
        <div className="absolute -bottom-4 -right-4 text-purple-300 transform rotate-12">
          <Heart size={30} fill="currentColor" />
        </div>

        <div className="space-y-4 text-center">
          <p className="text-2xl text-gray-700 font-handwriting leading-relaxed">
            {GIFT_DATA.message.text}
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="text-2xl">💌</span>
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};