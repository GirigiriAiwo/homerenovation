import CategoryPage from "@/app/CategoryPage/CategoryPage";

const livingRoomStyles = [
  {
    name: "Modern Cozy",
    image: "/modern-livingroom.jpg",
    description: "Soft textures, neutral palettes, and contemporary furniture.",
  },
  {
    name: "Rustic Warmth",
    image: "/rustic-livingroom.jpg",
    description: "Wood elements, cozy lighting, and a welcoming atmosphere.",
  },
  {
    name: "Elegant Chic",
    image: "/elegant-livingroom.jpg",
    description: "Luxury materials, stylish decor, and sophisticated touches.",
  },
];

export default function LivingRoomPage() {
  return <CategoryPage title="Stylish Living Rooms" backgroundImage="/livingroom-hero.jpg" styles={livingRoomStyles} />;
}
