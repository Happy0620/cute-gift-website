import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Music, Share2 } from 'lucide-react';

// Mock Data
const GIFT_DATA = {
  hero: {
    title: "A Little Something Just for me Deepa 💚",
    subtitle: "Made with love, just for me wife🤭",
  },
  message: {
    text: "I made this little space just to remind you how special you are to me🥺💚",
  },
  photos: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1745192902605-bacc67000f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwzfHxjdXRlJTIwY291cGxlJTIwcG9sYXJvaWQlMjBhZXN0aGV0aWN8ZW58MHx8fHwxNzY3NDMxODgwfDA&ixlib=rb-4.1.0&q=80&w=400",
      caption: "Us being silly 🤪",
      rotation: -3
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1728566842903-59fbc50b951b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGFzdGVsJTIwYWVzdGhldGljJTIwaGVhcnRzJTIwZmxvd2Vyc3xlbnwwfHx8fDE3Njc0MzE4ODF8MA&ixlib=rb-4.1.0&q=80&w=400",
      caption: "Beautiful moments ✨🤧",
      rotation: 2
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1603712152246-d6fa4dad5d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY291cGxlJTIwcG9sYXJvaWQlMjBhZXN0aGV0aWN8ZW58MHx8fHwxNzY3NDMxODgwfDA&ixlib=rb-4.1.0&q=80&w=400",
      caption: "Me favorite view 😻",
      rotation: -2
    }
  ],
  music: {
    title: "A Little something for you ears🎁",
    helperText: "Press play… this song is for you 🎶💚",
    spotifyUrl: "https://open.spotify.com/embed/track/0aVd7QiY8BstysHb62c5Fi?utm_source=generator",
    note: "This song reminds me of you 😭"
  },
final: {
  text: `Though miles keep me from holding you close,
My heart aches more than words can show.
I wish I could be there, wipe your tears away,
Hold your hand, and make the pain sway.

Every moment apart feels heavy,
And I ache to comfort you, to steady
Your trembling spirit, your gentle smile,
I'm praying for you, every mile.

May each breath bring strength anew,
And health and healing wrap around you.
Until I can be by your side once more,
Know my love is with you, as I adore.`
}
};

// Hero Component
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Floating Hearts Background */}
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
        
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 leading-tight" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          {GIFT_DATA.hero.title}
        </h1>
        
        <p className="text-xl text-purple-500 font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
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
const MessageNote = () => {
  const [showHearts, setShowHearts] = React.useState(false);

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
        {/* Decorative hearts */}
        <div className="absolute -top-4 -left-4 text-pink-400 transform -rotate-12">
          <Heart size={40} fill="currentColor" />
        </div>
        <div className="absolute -bottom-4 -right-4 text-purple-400 transform rotate-12">
          <Heart size={30} fill="currentColor" />
        </div>

        {/* Hover hearts */}
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
          <p className="text-2xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Indie Flower, cursive' }}>
            {GIFT_DATA.message.text}
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="text-2xl">💌</span>
            <span className="text-2xl">💚</span>
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// PhotoGallery Component
const PhotoGallery = () => {
  const [hoveredId, setHoveredId] = React.useState(null);

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
              // const [hoveredId, setHoveredId] = React.useState<number | null>(null);
            >
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-lg mb-4 relative">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                
                {/* Share icon on hover */}
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
              <p className="text-center text-xl text-gray-700 absolute bottom-4 left-0 right-0" style={{ fontFamily: 'Indie Flower, cursive' }}>
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
const SurpriseMusicCard = () => {
  const [showSparkles, setShowSparkles] = React.useState(false);

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
        {/* Sparkles on hover */}
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
          <h2 className="text-3xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            {GIFT_DATA.music.title}
          </h2>
          <p className="text-gray-700 mb-6 text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>
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
          
          <p className="mt-6 text-sm text-gray-600 italic" style={{ fontFamily: 'Indie Flower, cursive' }}>
            {GIFT_DATA.music.note}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// FinalMessage Component
const FinalMessage = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-pink-100 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Hearts */}
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
        <p className="text-2xl md:text-3xl text-pink-600 leading-relaxed mb-8 whitespace-pre-line" style={{ fontFamily: 'Indie Flower, cursive' }}>
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
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: 'Nunito, sans-serif' }}>
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