import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrival from "../Components/Products/NewArrival";
import FeaturedCollection from "../Components/Products/FeaturedCollection";
import FeatureSection from "../Components/Products/FeatureSection";
import ProductGrid from "../Components/Products/ProductGrid";
import ProductDetails from "../Components/Products/ProductDetails";

import { fetchProductsByFilters } from "../redux/slices/productsSlice";

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    dispatch(
      fetchProductsByFilters({ gender: "Men", category: "Top Wear", limit: 8 })
    );

    const fetchBestSeller = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        if (res.data && res.data._id) {
          setBestSellerProduct(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch best seller:", err);
      }
    };

    fetchBestSeller();
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Top Wear",
        limit: 8,
      })
    );
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrival />

      {/* Best Seller */}
      <h2 className="text-3xl font-bold text-center mb-4">Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className="text-center">Loading best seller products...</p>
      )}

      {/* Top Wears */}
      {/* Top Wears for Women */}
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Top Wears - Women
        </h2>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <ProductGrid
            products={products.filter(
              (product) =>
                product.gender === "Women" && product.category === "Top Wear"
            )}
          />
        )}
      </div>

      <FeaturedCollection />
      <FeatureSection />
    </div>
  );
}

export default Home;
