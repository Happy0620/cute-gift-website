import React from 'react';
import { motion } from 'framer-motion';
import { GIFT_DATA } from './mockData';

// PhotoGallery Component
const PhotoGallery: React.FC = () => {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-purple-50 overflow-hidden">
      <div className="mx-auto space-y-16" style={{ maxWidth: '280px' }}>
        {GIFT_DATA.photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="relative"
          >
            <motion.div 
              className="bg-white p-3 pb-10 shadow-lg hover:shadow-2xl hover:shadow-purple-300/50 rounded-lg transform transition-all duration-300 cursor-pointer relative"
              style={{ transform: `rotate(${photo.rotation}deg)` }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10
              }}
              onHoverStart={() => setHoveredId(photo.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="bg-gray-100 overflow-hidden rounded-lg mb-4 relative" style={{ width: '100%', height: '280px' }}>
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                
                {hoveredId === photo.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                  >
                    <Share2 size={20} className="text-pink-500" />
                  </motion.div>
                )}
              </div>
              <p className="text-center text-lg text-gray-700 absolute bottom-3 left-0 right-0 font-handwriting">
                {photo.caption}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};