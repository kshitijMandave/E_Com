import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const FilterSidebar = ({ isOpen, onClose }) => {
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

  const categories = ["Top Wear", "Bottom Wear", "Footwear", "Accessories"];
  const genders = ["Men", "Women"];
  const colors = ["Red", "Blue", "Black", "White"];
  const sizes = ["S", "M", "L", "XL"];
  const materials = ["Cotton", "Polyester", "Denim", "Leather"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok"];

  // Sync state with URL params
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 100,
    });
    setPriceRange([
      params.minPrice ? Number(params.minPrice) : 0,
      params.maxPrice ? Number(params.maxPrice) : 100,
    ]);
  }, [searchParams]);

  // Update URL params
  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      const value = newFilters[key];

      if (Array.isArray(value) && value.length === 0) return;
      if (value === "" || value === null || value === undefined) return;
      if (
        (key === "minPrice" && value === 0) ||
        (key === "maxPrice" && value === 100)
      )
        return;

      if (Array.isArray(value)) params.set(key, value.join(","));
      else params.set(key, value);
    });

    setSearchParams(params);
  };

  const handleFilterChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  };

  const handleArrayFilterChange = (key, value) => {
    const updatedArray = filters[key].includes(value)
      ? filters[key].filter((item) => item !== value)
      : [...filters[key], value];
    const updatedFilters = { ...filters, [key]: updatedArray };
    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);

    const updatedFilters = {
      ...filters,
      minPrice: newRange[0],
      maxPrice: newRange[1],
    };
    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      category: "",
      gender: "",
      color: "",
      size: [],
      material: [],
      brand: [],
      minPrice: 0,
      maxPrice: 100,
    };
    setFilters(clearedFilters);
    setPriceRange([0, 100]);
    setSearchParams({});
  };

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:relative lg:shadow-none
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button className="lg:hidden text-gray-600" onClick={onClose}>
          <FaTimes size={18} />
        </button>
      </div>

      <div className="p-4 space-y-6 overflow-y-auto h-full">
        {/* Gender */}
        <div>
          <h3 className="font-medium mb-2">Gender</h3>
          <div className="flex flex-col gap-2">
            {genders.map((g) => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  checked={filters.gender === g}
                  onChange={() => handleFilterChange("gender", g)}
                  className="w-4 h-4 accent-blue-500"
                />
                <span>{g}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="border rounded p-2 w-full focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Color */}
        <div>
          <h3 className="font-medium mb-2">Color</h3>
          <select
            value={filters.color}
            onChange={(e) => handleFilterChange("color", e.target.value)}
            className="border rounded p-2 w-full focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All</option>
            {colors.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Size */}
        <div>
          <h3 className="font-medium mb-2">Size</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <label
                key={s}
                className={`px-2 py-1 border rounded cursor-pointer ${
                  filters.size.includes(s)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700"
                }`}
              >
                <input
                  type="checkbox"
                  checked={filters.size.includes(s)}
                  onChange={() => handleArrayFilterChange("size", s)}
                  className="hidden"
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        {/* Material */}
        <div>
          <h3 className="font-medium mb-2">Material</h3>
          <div className="flex flex-wrap gap-2">
            {materials.map((m) => (
              <label
                key={m}
                className={`px-2 py-1 border rounded cursor-pointer ${
                  filters.material.includes(m)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700"
                }`}
              >
                <input
                  type="checkbox"
                  checked={filters.material.includes(m)}
                  onChange={() => handleArrayFilterChange("material", m)}
                  className="hidden"
                />
                {m}
              </label>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div>
          <h3 className="font-medium mb-2">Brand</h3>
          <div className="flex flex-wrap gap-2">
            {brands.map((b) => (
              <label
                key={b}
                className={`px-2 py-1 border rounded cursor-pointer ${
                  filters.brand.includes(b)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700"
                }`}
              >
                <input
                  type="checkbox"
                  checked={filters.brand.includes(b)}
                  onChange={() => handleArrayFilterChange("brand", b)}
                  className="hidden"
                />
                {b}
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="flex justify-between text-sm mb-2">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
          <div className="flex gap-2">
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-full accent-blue-500"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-full accent-blue-500"
            />
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={clearAllFilters}
          className="w-full mt-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
