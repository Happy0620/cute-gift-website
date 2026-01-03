import React from 'react';
import { motion } from 'framer-motion';
import { GIFT_DATA } from './mockData';

export const PhotoGallery: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-purple-50 overflow-hidden">
      <div className="max-w-[50px] mx-auto space-y-16">
        {GIFT_DATA.photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            <div 
              className="bg-white p-4 pb-12 shadow-lg rounded-sm transform transition-transform hover:scale-105 duration-300"
              style={{ transform: `rotate(${photo.rotation}deg)` }}
            >
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-sm mb-4">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-center font-handwriting text-xl text-gray-600 absolute bottom-4 left-0 right-0">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};