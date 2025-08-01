import { useState } from "react";
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

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const togglecartDrawer = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        {/* Left */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            <img className="h-6" src={logo} alt="Aura Logo" />
          </Link>
        </div>

        {/* Center Navigation Links (Simple Links) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="/collections/women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="/collections/electronics"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Electronics
          </Link>
          <Link
            to="/collections/jewellery"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Jewellery
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="block bg-black px-2 rounded text-sm text-white"
          >
            Admin
          </Link>
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
            <Link
              to="/collections/men"
              onClick={toggleNavDrawer}
              className="block text-gray-800 font-medium"
            >
              Men
            </Link>
            <Link
              to="/collections/women"
              onClick={toggleNavDrawer}
              className="block text-gray-800 font-medium"
            >
              Women
            </Link>
            <Link
              to="/collections/electronics"
              onClick={toggleNavDrawer}
              className="block text-gray-800 font-medium"
            >
              Electronics
            </Link>
            <Link
              to="/collections/jewellery"
              onClick={toggleNavDrawer}
              className="block text-gray-800 font-medium"
            >
              Jewellery
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
