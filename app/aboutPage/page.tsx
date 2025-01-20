"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../NavBarComponent/Navbar";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center bg-[#121212] py-20 px-6">
        <h1 className="text-5xl font-extrabold md:text-7xl text-center font-poppins">About Us</h1>
        <p className="mt-4 max-w-3xl text-center text-lg md:text-xl text-gray-300 font-poppins">
          We are more than just a team—we are dreamers, creators, and innovators.
          Our goal is to redefine the boundaries of whats possible, one project at a time.
        </p>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-6 md:px-16 lg:px-32 bg-[#1c1c1c] font-poppins">
        <h2 className="text-4xl font-bold text-center text-gray-100 md:text-5xl">Our Mission</h2>
        <p className="mt-6 w-full mx-auto text-justify text-lg text-gray-300">
          At ABAPOMON, our mission is to transform homes into inspiring spaces that reflect your unique lifestyle. 
          We combine creativity, craftsmanship, and innovation to deliver exceptional home renovations that are both functional and beautiful. 
          Our skilled team works closely with clients to understand their vision and create personalized spaces. We prioritize quality, using the best materials and 
          techniques to ensure long-lasting results. Committed to sustainability and innovation, we aim to make every renovation smooth, stress-free, and future-proof. 
          Our goal is to create homes where you can thrive, blending comfort, joy, and inspiration.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-[#1e1e1e] py-20 px-6 md:px-16 lg:px-32 font-poppins">
        <h2 className="text-4xl font-bold text-center md:text-5xl text-gray-100">Meet the Team</h2>
        <p className="mt-4 max-w-xl mx-auto text-center text-lg text-gray-300">
          A team of dedicated professionals united by passion and purpose.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Marceline", position: "Vampire Queen" },
            { name: "Finn", position: "Hero" },
            { name: "Jake", position: "Dog and Best Friend" },
            { name: "BMO", position: "Living Video Game Console" },
            { name: "Princess Bubblegum", position: "Princess and Scientist" },
            { name: "Gunter", position: "Penguin" },
          ].map((teamMember, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gray-700 shadow-lg">
                <Image
                  src={`/team${index + 1}.jpg`}
                  alt={`Team Member ${teamMember.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{teamMember.name}</h3>
              <p className="text-gray-400">{teamMember.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-6 md:px-16 lg:px-32 bg-[#1c1c1c] font-poppins">
        <h2 className="text-4xl font-bold text-center md:text-5xl text-gray-100">
          What Our Clients Say
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-center text-lg text-gray-300">
          Hear from those who have experienced the difference we bring.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((testimonial) => (
            <div
              key={testimonial}
              className="rounded-lg border border-gray-700 p-6 shadow-lg bg-[#121212]"
            >
              <p className="text-gray-300 italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tristique eros id consequat ultricies.
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gray-700">
                  <Image
                    src={`/client${testimonial}.jpg`}
                    alt={`Client ${testimonial}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Client Name</h4>
                  <p className="text-sm text-gray-400">Job Title</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
