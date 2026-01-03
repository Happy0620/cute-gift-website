import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Music, Share2 } from 'lucide-react';
import { GIFT_DATA } from './components/gift/mockData';

// Hero Component
const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: Math.random() * 15 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute text-pink-300"
          >
            <Heart size={Math.random() * 30 + 15} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="z-10 max-w-lg bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl hover:shadow-pink-200/50 transition-all duration-300"
      >
        <div className="mb-6 flex justify-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Sparkles className="text-yellow-400 w-14 h-14" />
          </motion.div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 leading-tight font-display">
          {GIFT_DATA.hero.title}
        </h1>
        
        <p className="text-xl text-purple-500 font-medium">
          {GIFT_DATA.hero.subtitle}
        </p>

        <motion.div 
          className="mt-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full mx-auto mt-2 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// MessageNote Component
const MessageNote: React.FC = () => {
  const [showHearts, setShowHearts] = React.useState<boolean>(false);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-pink-50 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        onHoverStart={() => setShowHearts(true)}
        onHoverEnd={() => setShowHearts(false)}
        className="bg-white max-w-md w-full p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-pink-300/50 relative transform rotate-1 transition-all duration-300 cursor-pointer"
      >
        <div className="absolute -top-4 -left-4 text-pink-400 transform -rotate-12">
          <Heart size={40} fill="currentColor" />
        </div>
        <div className="absolute -bottom-4 -right-4 text-purple-400 transform rotate-12">
          <Heart size={30} fill="currentColor" />
        </div>

        {showHearts && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -50 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute top-1/2 left-1/4 text-pink-400"
            >
              <Heart size={20} fill="currentColor" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -50 }}
              transition={{ duration: 1.5, delay: 0.3, repeat: Infinity }}
              className="absolute top-1/2 right-1/4 text-red-400"
            >
              <Heart size={24} fill="currentColor" />
            </motion.div>
          </>
        )}

        <div className="space-y-4 text-center">
          <p className="text-2xl text-gray-700 leading-relaxed font-handwriting">
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

// PhotoGallery Component
const PhotoGallery: React.FC = () => {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-md mx-auto space-y-16">
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
              className="bg-white p-4 pb-12 shadow-lg hover:shadow-2xl hover:shadow-purple-300/50 rounded-lg transform transition-all duration-300 cursor-pointer relative"
              style={{ transform: `rotate(${photo.rotation}deg)` }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10
              }}
              onHoverStart={() => setHoveredId(photo.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-lg mb-4 relative">
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
              <p className="text-center text-xl text-gray-700 absolute bottom-4 left-0 right-0 font-handwriting">
                {photo.caption}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// SurpriseMusicCard Component
const SurpriseMusicCard: React.FC = () => {
  const [showSparkles, setShowSparkles] = React.useState<boolean>(false);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-blue-50 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
        onHoverStart={() => setShowSparkles(true)}
        onHoverEnd={() => setShowSparkles(false)}
        className="bg-white max-w-md w-full rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-300/50 overflow-hidden transition-all duration-300 cursor-pointer relative"
      >
        {showSparkles && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: [0, 1, 0], scale: 1.5, rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute top-10 right-10 text-yellow-400 z-10"
            >
              <Sparkles size={24} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: [0, 1, 0], scale: 1.5, rotate: -360 }}
              transition={{ duration: 1.2, delay: 0.3, repeat: Infinity }}
              className="absolute bottom-10 left-10 text-pink-400 z-10"
            >
              <Sparkles size={20} />
            </motion.div>
          </>
        )}

        <div className="p-8 text-center bg-gradient-to-br from-blue-100 to-purple-100">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <Music className="text-blue-500 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3 font-display">
            {GIFT_DATA.music.title}
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            {GIFT_DATA.music.helperText}
          </p>
          
          <div className="rounded-2xl overflow-hidden shadow-lg bg-black">
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
            />
          </div>
          
          <p className="mt-6 text-sm text-gray-600 italic font-handwriting">
            {GIFT_DATA.music.note}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// FinalMessage Component
const FinalMessage: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-pink-100 via-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: "100%", 
              x: Math.random() * 100 + "%", 
              opacity: 0 
            }}
            animate={{ 
              y: "-20%", 
              opacity: [0, 0.4, 0] 
            }}
            transition={{ 
              duration: Math.random() * 8 + 7, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-pink-300"
          >
            <Heart size={Math.random() * 50 + 15} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="z-10 max-w-lg bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl hover:shadow-pink-300/50 transition-all duration-300"
      >
        <p className="text-2xl md:text-3xl text-pink-600 leading-relaxed mb-8 whitespace-pre-line font-handwriting">
          {GIFT_DATA.final.text}
        </p>
        
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block text-red-500"
        >
          <Heart size={70} fill="currentColor" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-pink-200 selection:text-pink-900">
      <Hero />
      <MessageNote />
      <PhotoGallery />
      <SurpriseMusicCard />
      <FinalMessage />
      
      <footer className="py-8 text-center text-pink-400 text-sm bg-gradient-to-t from-pink-50 to-white">
        <p className="font-medium">Made with ❤️</p>
      </footer>
    </div>
  );
}

export default App;