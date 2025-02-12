import { notFound } from "next/navigation";
import Image from "next/image";

const projects = [
  { id: 1, title: "Modern Kitchen Remodel", category: "kitchen", image: "/kitchen1.jpg", details: "New countertops, cabinets, and lighting." },
  { id: 2, title: "Cozy Bathroom Upgrade", category: "bathroom", image: "/bathroom1.jpg", details: "New tiles, vanity, and bathtub." },
  { id: 3, title: "Elegant Living Room", category: "living-room", image: "/livingroom1.jpg", details: "Wood flooring, built-in shelves, and modern lighting." },
  { id: 4, title: "Backyard Patio Renovation", category: "exterior", image: "/backyardpatio1.jpg", details: "Stone patio, firepit, and landscaping." },
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) return notFound(); // Show 404 if project doesn't exist

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <Image src={project.image} alt={project.title} width={800} height={500} className="rounded-lg" />
      <p className="text-gray-600 mt-4">{project.details}</p>
    </div>
  );
}
