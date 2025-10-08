import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import CartDrawer from "../Layout/CartDrawer";
import logo from "./auralogo.png";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  const cartItemCount =
    cart?.products?.reduce((sum, p) => sum + p.quantity, 0) || 0;

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        <div>
          <Link to="/">
            <img className="h-6" src={logo} alt="Aura Logo" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/collections/all?gender=Men"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="/collections/all?gender=Women"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setNavDrawerOpen(!navDrawerOpen)}
            className="md:hidden"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setNavDrawerOpen(false)}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <Link
            to="/collections/all?gender=Men"
            onClick={() => setNavDrawerOpen(false)}
            className="block text-gray-800 font-medium"
          >
            Men
          </Link>
          <Link
            to="/collections/all?gender=Women"
            onClick={() => setNavDrawerOpen(false)}
            className="block text-gray-800 font-medium"
          >
            Women
          </Link>
          <Link
            to="/collections/all?category=Top Wear"
            onClick={() => setNavDrawerOpen(false)}
            className="block text-gray-800 font-medium"
          >
            Top Wear
          </Link>
          <Link
            to="/collections/all?category=Bottom Wear"
            onClick={() => setNavDrawerOpen(false)}
            className="block text-gray-800 font-medium"
          >
            Bottom Wear
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
