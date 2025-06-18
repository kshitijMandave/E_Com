import Hero from "../Components/Layout/Hero";
import FeaturedCollection from "../Components/Products/FeaturedCollection";
import FeatureSection from "../Components/Products/FeatureSection";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrival from "../Components/Products/NewArrival";
import ProductDetails from "../Components/Products/ProductDetails";
import ProductGrid from "../Components/Products/ProductGrid";

const placeholderProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=1" }],
  },
  {
    id: 2,
    name: "Product 2",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    id: 3,
    name: "Product 3",
    price: 150,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    id: 4,
    name: "Product 4",
    price: 90,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    id: 5,
    name: "Product 5",
    price: 110,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    id: 6,
    name: "Product 6",
    price: 130,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    id: 7,
    name: "Product 7",
    price: 95,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    id: 8,
    name: "Product 8",
    price: 160,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
];

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrival />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
      <FeatureSection />
    </div>
  );
}

export default Home;
