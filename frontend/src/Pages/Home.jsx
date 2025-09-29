import { useEffect, useState } from "react";
import Hero from "../Components/Layout/Hero";
import FeaturedCollection from "../Components/Products/FeaturedCollection";
import FeatureSection from "../Components/Products/FeatureSection";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrival from "../Components/Products/NewArrival";
import ProductDetails from "../Components/Products/ProductDetails";
import ProductGrid from "../Components/Products/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch filtered products from Redux
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );

    // Fetch best seller product from backend
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        // Assuming API returns an array of products
        setBestSellerProduct(response.data[0] || null);
      } catch (error) {
        console.error("Failed to fetch best seller product:", error);
      }
    };

    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrival />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className="text-center">Loading best seller products...</p>
      )}

      {/* Top Wears for Women */}
      <div className="container mx-auto my-8">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <ProductGrid products={products} loading={loading} error={error} />
        )}
      </div>

      <FeaturedCollection />
      <FeatureSection />
    </div>
  );
}

export default Home;
