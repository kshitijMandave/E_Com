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

  // Update state from URL on load
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: parseInt(params.minPrice) || 0,
      maxPrice: parseInt(params.maxPrice) || 100,
    });

    setPriceRange([
      parseInt(params.minPrice) || 0,
      parseInt(params.maxPrice) || 100,
    ]);
  }, [searchParams]);

  // Log changes to filters
  useEffect(() => {
    console.log("Current Filters:", filters);
  }, [filters]);

  const updateQuery = (key, values) => {
    if (Array.isArray(values)) {
      values.length > 0
        ? searchParams.set(key, values.join(","))
        : searchParams.delete(key);
    } else {
      values ? searchParams.set(key, values) : searchParams.delete(key);
    }
    setSearchParams(searchParams);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log("Filter Changed:", { name, value, checked, type }); // ✅ Debug log

    if (type === "radio") {
      setFilters((prev) => ({ ...prev, [name]: value }));
      updateQuery(name, value);
    }

    if (type === "checkbox") {
      const updated = checked
        ? [...filters[name], value]
        : filters[name].filter((item) => item !== value);

      setFilters((prev) => ({ ...prev, [name]: updated }));
      updateQuery(name, updated);
    }
  };

  const handleColorSelect = (color) => {
    const selected = filters.color === color ? "" : color;
    setFilters((prev) => ({ ...prev, color: selected }));
    updateQuery("color", selected);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2"
            />
            <label className="capitalize">{category}</label>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((g) => (
          <div key={g} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={g}
              onChange={handleFilterChange}
              checked={filters.gender === g}
              className="mr-2"
            />
            <label className="capitalize">{g}</label>
          </div>
        ))}
      </div>

      {/* Color */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => handleColorSelect(color)}
              className={`w-8 h-8 rounded-full border-2 transition hover:scale-110 ${
                filters.color === color
                  ? "ring-2 ring-black"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2"
            />
            <label>{size}</label>
          </div>
        ))}
      </div>

      {/* Brand */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2"
            />
            <label className="capitalize">{brand}</label>
          </div>
        ))}
      </div>

      {/* Material */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((mat) => (
          <div key={mat} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={mat}
              onChange={handleFilterChange}
              checked={filters.material.includes(mat)}
              className="mr-2"
            />
            <label className="capitalize">{mat}</label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block font-medium text-gray-600 mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="pricerange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={(e) => {
            const newMax = Number(e.target.value);
            setPriceRange([priceRange[0], newMax]);
            setFilters((prev) => ({ ...prev, maxPrice: newMax }));
            searchParams.set("maxPrice", newMax);
            setSearchParams(searchParams);
            console.log("Price Changed:", newMax); // ✅ Debug log
          }}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;
