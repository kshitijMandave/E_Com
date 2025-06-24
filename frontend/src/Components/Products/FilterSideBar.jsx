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

  const updateQuery = (key, values) => {
    if (Array.isArray(values)) {
      if (values.length > 0) {
        searchParams.set(key, values.join(","));
      } else {
        searchParams.delete(key);
      }
    } else {
      if (values) {
        searchParams.set(key, values);
      } else {
        searchParams.delete(key);
      }
    }
    setSearchParams(searchParams);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, category: value }));
    updateQuery("category", value);
  };

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, gender: value }));
    updateQuery("gender", value);
  };

  const handleCheckboxChange = (e, key) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    const updated = isChecked
      ? [...filters[key], value]
      : filters[key].filter((item) => item !== value);

    setFilters((prev) => ({ ...prev, [key]: updated }));
    updateQuery(key, updated);
  };

  const handleColorSelect = (color) => {
    const selected = filters.color === color ? "" : color;
    setFilters((prev) => ({ ...prev, color: selected }));
    updateQuery("color", selected);
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
              className="mr-2"
            />
            <label className="capitalize">{category}</label>
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
              className="mr-2"
            />
            <label className="capitalize">{g}</label>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
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

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              value={size}
              checked={filters.size.includes(size)}
              onChange={(e) => handleCheckboxChange(e, "size")}
              className="mr-2"
            />
            <label>{size}</label>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((mat) => (
          <div key={mat} className="flex items-center mb-1">
            <input
              type="checkbox"
              value={mat}
              checked={filters.material.includes(mat)}
              onChange={(e) => handleCheckboxChange(e, "material")}
              className="mr-2"
            />
            <label className="capitalize">{mat}</label>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={(e) => handleCheckboxChange(e, "brand")}
              className="mr-2"
            />
            <label className="capitalize">{brand}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterSideBar;
