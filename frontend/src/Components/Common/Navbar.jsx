import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import logo from "./auralogo.png";
import CartDrawer from "../Layout/CartDrawer";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const togglecartDrawer = () => {
    setIsCartOpen((prev) => !prev);
  };

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const categoryMap = {
    Men: ["T-Shirts", "Shirts", "Jeans", "Shoes"],
    Women: ["Sarees", "Tops", "Kurtis", "Heels"],
    Electronics: ["Mobiles", "Laptops", "Headphones"],
    Jewellery: ["Earrings", "Necklaces", "Bracelets"],
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        {/* Left */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            <img className="h-6" src={logo} alt="Aura Logo" />
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-6" ref={dropdownRef}>
          {Object.keys(categoryMap).map((label) => (
            <div key={label} className="relative">
              <button
                onClick={() => toggleDropdown(label)}
                className="text-gray-700 hover:text-black text-sm font-medium uppercase"
              >
                {label}
              </button>

              {activeDropdown === label && (
                <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-40 py-2 z-50">
                  {categoryMap[label].map((cat) => (
                    <Link
                      key={cat}
                      to={`/category/${cat.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          <button
            onClick={togglecartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          <SearchBar />

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={togglecartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            {Object.keys(categoryMap).map((label) => (
              <div key={label}>
                <p className="text-gray-800 font-medium">{label}</p>
                <div className="ml-4 space-y-1">
                  {categoryMap[label].map((cat) => (
                    <Link
                      key={cat}
                      to={`/category/${cat.toLowerCase()}`}
                      onClick={toggleNavDrawer}
                      className="block text-gray-600 hover:text-black text-sm"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
