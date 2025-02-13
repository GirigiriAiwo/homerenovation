import CategoryPage from "@/app/CategoryPage/CategoryPage";

const bathroomStyles = [
  {
    name: "Spa-Like Retreat",
    image: "/spa-bathroom.jpg",
    description: "Relaxing tones, modern fixtures, and a luxurious atmosphere.",
  },
  {
    name: "Minimalist Haven",
    image: "/minimalist-bathroom.jpg",
    description: "Clean lines, neutral colors, and space efficiency.",
  },
  {
    name: "Vintage Charm",
    image: "/vintage-bathroom.jpg",
    description: "Classic details, antique-inspired fixtures, and warm lighting.",
  },
];

export default function BathroomPage() {
  return <CategoryPage title="Luxurious Bathrooms" backgroundImage="/bathroom-hero.jpg" styles={bathroomStyles} />;
}
