import { useState } from "react";

function EditProductPage() {
  const [productsData, setProductsData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://www.musclefitbasics.com/cdn/shop/products/darkgreen_900x.jpg?v=1591928016",
      },
      {
        url: "https://www.musclefitbasics.com/cdn/shop/products/darkgreen2_900x.jpg?v=1591928016",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductsData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.file[0];
    console.log(file);
  };
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      <form>
        {/*Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productsData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/*Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productsData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
            rows={4}
          />

          {/*Price */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={productsData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          {/*Count In Stock */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Count In Stock</label>
            <input
              type="number"
              name="countInStock"
              value={productsData.countInStock}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          {/*SKU */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">SKU</label>
            <input
              type="text"
              name="sku"
              value={productsData.sku}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          {/*Sizes */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Sizes (seperate by Comma)
            </label>
            <input
              type="text"
              name="sizes"
              value={productsData.sizes}
              onChange={(e) =>
                setProductsData({
                  ...productsData,
                  sizes: e.target.value.split(",").map((size) => size.trim()),
                })
              }
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/*Colors */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Colors (seperate by Comma)
            </label>
            <input
              type="text"
              name="colors"
              value={productsData.colors.join(",")}
              onChange={(e) =>
                setProductsData({
                  ...productsData,
                  colors: e.target.value
                    .split(",")
                    .map((color) => color.trim()),
                })
              }
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          {/*Image Upload */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Upload Image</label>

            <label className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700">
              Choose File
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            <div className="flex gap-4 mt-4 flex-wrap">
              {productsData.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.url}
                    alt={image.url || "Product Image"}
                    className="w-20 h-20 object-cover rounded-md shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 rounded-md text-white py-2 transition-colors"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
}

export default EditProductPage;
