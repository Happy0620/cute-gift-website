import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import { GIFT_DATA } from './mockData';

export const SurpriseMusicCard: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-blue-50 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-md w-full rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="p-8 text-center bg-gradient-to-r from-blue-100 to-purple-100">
          <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-4">
            <Music className="text-blue-400 w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{GIFT_DATA.music.title}</h2>
          <p className="text-gray-600 mb-6">{GIFT_DATA.music.helperText}</p>
          
          <div className="rounded-2xl overflow-hidden shadow-md bg-black">
            <iframe 
              style={{ borderRadius: '12px' }} 
              src={GIFT_DATA.music.spotifyUrl} 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </div>
          
          <p className="mt-6 text-sm text-gray-500 italic">
            {GIFT_DATA.music.note}
          </p>
        </div>
      </motion.div>
    </section>
  );
};