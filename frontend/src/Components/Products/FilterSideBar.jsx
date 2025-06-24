import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function FilterSideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["top wear", "bottom wear"];
  const genders = ["men", "women"];

  const colors = [
    "black",
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "brown",
    "gray",
    "purple",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "cotton",
    "polyester",
    "linen",
    "denim",
    "wool",
    "leather",
    "silk",
    "nylon",
  ];

  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Zara",
    "H&M",
    "Levi's",
    "Uniqlo",
    "Reebok",
    "Roadster",
    "HRX",
  ];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
  }, [searchParams]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, category: value }));
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, gender: value }));
    searchParams.set("gender", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleCategoryChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label className="text-gray-700 capitalize">{category}</label>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((g) => (
          <div key={g} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={g}
              checked={filters.gender === g}
              onChange={handleGenderChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <label className="text-gray-700 capitalize">{g}</label>
          </div>
        ))}
      </div>

      {/*Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;
