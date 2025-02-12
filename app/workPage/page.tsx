"use client";

import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const projects = [
  { id: 1, title: "Modern Kitchen Remodel", category: "kitchen", image: "/kitchen1.jpg", details: "New countertops, cabinets, and lighting." },
  { id: 2, title: "Cozy Bathroom Upgrade", category: "bathroom", image: "/bathroom1.jpg", details: "New tiles, vanity, and bathtub." },
  { id: 3, title: "Elegant Living Room", category: "living-room", image: "/livingroom1.jpg", details: "Wood flooring, built-in shelves, and modern lighting." },
  { id: 4, title: "Backyard Patio Renovation", category: "exterior", image: "/backyardpatio1.jpg", details: "Stone patio, firepit, and landscaping." },
];

const GalleryPage = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const router = useRouter();
  const [openProject, setOpenProject] = useState<number | null>(null); // Store the open project ID

  const handleProjectClick = (projectId: number) => {
    if (isMobile) {
      setOpenProject(projectId); // Open the modal
    } else {
      router.push(`/projects/${projectId}`);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Renovation Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full h-56 cursor-pointer rounded-lg overflow-hidden group"
            onClick={() => handleProjectClick(project.id)}
          >
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-bold">{project.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Dialog */}
      {projects.map((project) => (
        <Dialog key={project.id} open={openProject === project.id} onOpenChange={() => setOpenProject(null)}>
          <DialogContent className="max-w-lg">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.details}</p>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default GalleryPage;
