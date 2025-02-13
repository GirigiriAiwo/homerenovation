"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Modern Kitchen Remodel", category: "kitchen", image: "/kitchen1.jpg", page: "kitchenPage" },
  { id: 2, title: "Cozy Bathroom Upgrade", category: "bathroom", image: "/bathroom1.jpg", page: "kitchenPage" },
  { id: 3, title: "Elegant Living Room", category: "living-room", image: "/livingroom1.jpg", page: "kitchenPage" },
  { id: 4, title: "Backyard Patio Renovation", category: "exterior", image: "/backyardpatio1.jpg", page: "kitchenPage" },
  { id: 5, title: "Poolside Relaxation", category: "outdoor", image: "/poolside.jpg", page: "kitchenPage" },
  { id: 6, title: "Classic Home Office", category: "office", image: "/homeoffice.jpg", page: "kitchenPage" },
];

const GalleryPage = () => {
  const router = useRouter();

  return (
    <motion.div
      className="p-10 max-w-full mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Navigation Placeholder */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Our Work</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-gray-500 hover:text-black transition">About</a>
          <a href="#" className="text-gray-500 hover:text-black transition">Work</a>
          <a href="#" className="text-gray-500 hover:text-black transition">People</a>
          <a href="#" className="text-gray-500 hover:text-black transition">News</a>
          <a href="#" className="text-gray-500 hover:text-black transition">Contact</a>
        </nav>
      </div>

      {/* Gallery Grid */}
      <motion.div className="grid grid-cols-1 max-w-full sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] cursor-pointer overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push(`/${project.page}`)}
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300"
              priority
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold tracking-wide">{project.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GalleryPage;
