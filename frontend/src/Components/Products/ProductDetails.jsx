import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../../redux/slices/productsSlice";

function ProductDetails({ productId, product }) {
  const dispatch = useDispatch();
  const { productDetails, similarProducts, loading, error } = useSelector(
    (state) => state.products
  );

  // Use passed product directly, else fetch by ID
  const [selectedProduct, setSelectedProduct] = useState(product || null);
  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product && productId) {
      dispatch(fetchProductDetails(productId));
      dispatch(fetchSimilarProducts(productId));
    }
  }, [dispatch, productId, product]);

  useEffect(() => {
    if (!product && productDetails) {
      setSelectedProduct(productDetails);
      setMainImage(productDetails.images?.[0]?.url || "");
    }
  }, [productDetails, product]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  if (loading && !selectedProduct)
    return <div className="text-center">Loading product...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!selectedProduct)
    return <div className="text-center">No product found</div>;

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images?.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <img
              src={mainImage || "/placeholder.png"}
              alt="Main product"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="md:hidden flex overflow-x-scroll space-x-4 my-4">
              {selectedProduct.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 md:ml-10 mt-4 md:mt-0">
            <h1 className="text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            {selectedProduct.originalPrice && (
              <p className="text-lg text-gray-600 line-through">
                ₹{selectedProduct.originalPrice}
              </p>
            )}
            <p className="text-xl font-bold text-red-600 mb-2">
              ₹{selectedProduct.price}
            </p>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

            {selectedProduct.brand && (
              <p className="mb-2">
                <strong>Brand:</strong> {selectedProduct.brand}
              </p>
            )}
            {selectedProduct.material && (
              <p className="mb-4">
                <strong>Material:</strong> {selectedProduct.material}
              </p>
            )}

            {/* Colors */}
            {selectedProduct.colors?.length > 0 && (
              <div className="mb-4">
                <strong>Colors:</strong>
                <div className="flex items-center mt-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border mr-2 ${
                        selectedColor === color
                          ? "border-4 border-black"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {selectedProduct.sizes?.length > 0 && (
              <div className="mb-4">
                <p className="text-gray-700">Size:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes.map((size) => (
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
              className={`py-2 px-6 rounded w-full mb-4 ${
                !selectedSize || !selectedColor
                  ? "bg-gray-400 text-white"
                  : "bg-black text-white"
              }`}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
