import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
// import logo from "./aura-logo.png";

function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between px-4 py-6">
      {/*Left */}
      <div>
        <Link to="/" className="text-2xl font-medium">
          Aura
          {/* <img src={logo} alt="" /> */}
        </Link>
      </div>
      {/*Center Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Men
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Women
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Electronics
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Jwellary
        </Link>
      </div>
      {/*Right-Icons*/}
      <div className="flex items-center space-x-4">
        <Link to="/profile" className="hover:text-black">
          <HiOutlineUser className="h-6 w-6 text-gray-700" />
        </Link>
        <button className="relative hover:text-black">
          <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-1 bg-red-600 text white text-xs rounded-full px-2 py-0.5">
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
  );
}

export default Navbar;
