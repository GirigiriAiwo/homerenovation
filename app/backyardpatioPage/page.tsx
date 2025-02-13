import CategoryPage from "@/app/CategoryPage/CategoryPage";

const exteriorStyles = [
  {
    name: "Modern Facade",
    image: "/modern-exterior.jpg",
    description: "Clean lines, bold materials, and stunning curb appeal.",
  },
  {
    name: "Traditional Charm",
    image: "/traditional-exterior.jpg",
    description: "Timeless architecture, warm colors, and inviting landscapes.",
  },
  {
    name: "Coastal Escape",
    image: "/coastal-exterior.jpg",
    description: "Bright colors, open spaces, and a relaxed seaside vibe.",
  },
];

export default function ExteriorPage() {
  return <CategoryPage title="Elegant Exteriors" backgroundImage="/exterior-hero.jpg" styles={exteriorStyles} />;
}
