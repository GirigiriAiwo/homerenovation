"use client"
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Background: NextPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/bg1.jpg',
    '/bg2.jpg',
    '/bg3.jpg',
    '/bg4.jpg',
    '/bg5.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000); // Increase interval to match smoother transition

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Images Sliding Smoothly */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }} 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Dark Overlay with Smooth Fade-In */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="absolute inset-0 bg-black"
      />

      {/* Text Content with Gentle Entrance */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
        className="z-10 text-center text-white"
      >
        <h1 className="text-4xl font-bold md:text-6xl">Transform Your Space</h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          className="mt-4 text-lg md:text-xl"
        >
          Your dream home renovation starts here.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
          className="mt-6"
        >
          <a
            href="#contact"
            className="rounded bg-black px-6 py-3 font-bold text-white hover:bg-gray-700"
          >
            Get a Quote
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Background;
