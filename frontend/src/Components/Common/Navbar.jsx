import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import logo from "./auralogo.png";
import CartDrawer from "../Layout/CartDrawer";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

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

        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {["Men", "Women", "Electronics", "Jewellery"].map((label) => (
            <Link
              key={label}
              to="#"
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* Cart Button */}
          <button
            onClick={togglecartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          {/* Search */}
          <SearchBar />

          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={togglecartDrawer} />
    </>
  );
}

export default Navbar;
