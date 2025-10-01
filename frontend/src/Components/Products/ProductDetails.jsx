import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";

function ProductDetails({ productId }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetails, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);

  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts(productFetchId));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (productDetails?.images?.length > 0) {
      setMainImage(productDetails.images[0].url);
    }
  }, [productDetails]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart");
      return;
    }

    setIsAdding(true);

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId: user?._id,
      })
    )
      .unwrap()
      .then(() => toast.success("Product added to cart!", { duration: 1000 }))
      .catch(() => toast.error("Failed to add product to cart"))
      .finally(() => setIsAdding(false));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!productDetails) return <p>No product found</p>;

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {productDetails.images?.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={image.altText || `Thumbnail ${idx}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            {mainImage ? (
              <img
                src={mainImage}
                alt="Main product"
                className="w-full h-auto object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-64 bg-gray-100 rounded-lg" />
            )}
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 md:ml-10 mt-4 md:mt-0">
            <h1 className="text-3xl font-semibold mb-2">
              {productDetails.name}
            </h1>
            <p className="text-lg text-gray-600 line-through">
              ₹{productDetails.discountPrice}
            </p>
            <p className="text-xl font-bold text-red-600 mb-2">
              ₹{productDetails.price}
            </p>
            <p className="text-gray-700 mb-4">{productDetails.description}</p>

            <p className="mb-2">
              <strong>Brand:</strong> {productDetails.brand}
            </p>
            <p className="mb-4">
              <strong>Material:</strong> {productDetails.material}
            </p>

            {/* Colors */}
            <div className="mb-4">
              <strong>Colors:</strong>
              <div className="flex items-center mt-2">
                {productDetails.colors?.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border mr-2 ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            {Array.isArray(productDetails.sizes) &&
              productDetails.sizes.length > 0 && (
                <div className="mb-4">
                  <p className="text-gray-700">Size:</p>
                  <div className="flex gap-2 mt-2">
                    {productDetails.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded border ${
                          selectedSize === size ? "bg-black text-white" : ""
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor || isAdding}
              className={`py-2 px-6 rounded w-full mb-4 ${
                !selectedSize || !selectedColor
                  ? "bg-gray-400 text-white"
                  : "bg-black text-white"
              }`}
            >
              {isAdding ? "Adding..." : "ADD TO CART"}
            </button>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts?.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl text-center font-bold mb-4">
              You May Also Like
            </h2>
            <ProductGrid
              products={similarProducts}
              loading={loading}
              error={error}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
