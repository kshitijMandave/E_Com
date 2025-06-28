import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const similerProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    id: 3,
    name: "Product 3",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    id: 4,
    name: "Product 4",
    price: 200,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
];

function ProductDetails() {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart");
      return;
    }

    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      toast.success("Product added to cart!");
    }, 3000);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
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

          <div className="md:w-1/2">
            <img
              src={mainImage}
              alt="Main product"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="md:hidden flex overflow-x-scroll space-x-4 my-4">
              {selectedProduct.images.map((image, index) => (
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

          <div className="md:w-1/2 md:ml-10 mt-4 md:mt-0">
            <h1 className="text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 line-through">
              ₹{selectedProduct.originalPrice}
            </p>
            <p className="text-xl font-bold text-red-600 mb-2">
              ₹{selectedProduct.price}
            </p>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

            <p className="mb-2">
              <strong>Brand:</strong> {selectedProduct.brand}
            </p>
            <p className="mb-4">
              <strong>Material:</strong> {selectedProduct.material}
            </p>

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
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

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
              className={`py-2 px-6 rounded w-full mb-4 ${
                !selectedSize || !selectedColor
                  ? "bg-gray-400 text-white"
                  : "bg-black text-white"
              }`}
            >
              {isAdding ? "Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl text-center font-bold mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similerProducts} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
