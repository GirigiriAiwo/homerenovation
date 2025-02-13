"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Style {
  name: string;
  image: string;
  description: string;
}

interface CategoryPageProps {
  title: string;
  backgroundImage: string;
  styles: Style[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ title, backgroundImage, styles }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-6">
          <motion.h1
            className="text-white text-5xl font-extrabold tracking-wide leading-tight uppercase font-serif"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 font-serif text-white">
            Featured Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {styles.map((style, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Image src={style.image} alt={style.name} width={400} height={300} className="w-full rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-yellow-400 font-serif">{style.name}</h3>
                <p className="text-gray-400 font-light">{style.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-20 text-center">
        <motion.h2
          className="text-4xl font-semibold mb-6 font-serif tracking-wide text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Transform Your Space?
        </motion.h2>
        <motion.p
          className="text-lg mb-8 font-light text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Contact us today to schedule a consultation and bring your dream space to life.
        </motion.p>
        <motion.button
          className="bg-yellow-400 text-black py-3 px-8 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300 uppercase tracking-wide"
          whileHover={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default CategoryPage;
