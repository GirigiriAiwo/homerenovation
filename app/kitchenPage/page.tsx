import CategoryPage from "@/app/CategoryPage/CategoryPage";

const kitchenStyles = [
  {
    name: "Modern Elegance",
    image: "/modern-kitchen.jpg",
    description: "Sleek lines, high-tech appliances, and minimalist design.",
  },
  {
    name: "Classic Charm",
    image: "/classic-kitchen.jpg",
    description: "Timeless cabinetry, warm wood tones, and elegant finishes.",
  },
  {
    name: "Rustic Retreat",
    image: "/rustic-kitchen.jpg",
    description: "Natural materials, farmhouse sinks, and cozy ambiance.",
  },
];

export default function KitchenPage() {
  return <CategoryPage title="Beautiful Kitchens" backgroundImage="/kitchen-hero.jpg" styles={kitchenStyles} />;
}
