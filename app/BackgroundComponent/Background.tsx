"use client"
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Background: NextPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <>

      

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex h-full w-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="h-full w-full flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="z-10 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">Transform Your Space</h1>
          <p className="mt-4 text-lg md:text-xl">Your dream home renovation starts here.</p>
          <div className="mt-6">
            <a
              href="#contact"
              className="rounded bg-black px-6 py-3 font-bold text-white hover:bg-gray-700"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Background;
