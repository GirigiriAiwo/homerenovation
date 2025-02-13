"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const homeOfficeProjects = [
  { id: 1, title: "Minimalist Home Office", image: "/homeoffice.jpg", description: "A clean and modern workspace with a focus on productivity." },
  { id: 2, title: "Cozy Work Corner", image: "/cozyoffice.jpg", description: "A small but functional space with warm lighting and ergonomic furniture." },
  { id: 3, title: "Professional Study Room", image: "/studyroom.jpg", description: "A sophisticated study area with custom shelving and premium decor." },
];

const HomeOfficePage = () => {
  const router = useRouter();

  return (
    <motion.div
      className="p-10 max-w-full mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Home Office Projects</h1>

      {/* Back to Gallery Button */}
      <button
        className="mb-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        onClick={() => router.back()}
      >
        ← Back to Gallery
      </button>

      {/* Project Display */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {homeOfficeProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative w-full h-[300px] cursor-pointer overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300"
              priority
            />

            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold tracking-wide">{project.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomeOfficePage;
