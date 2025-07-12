import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t py-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 lg:px-0">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-500 mb-4 text-sm">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="text-gray-600 text-sm font-medium mb-6">
            Sign up and get 10% off your first order.
          </p>

          <form className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md 
                         focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800">
                Men
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                Women
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                Electronics
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                Jewellery
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Follow Us
          </h3>
          <div className="flex items-center space-x-4 mb-6 text-gray-700">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <TbBrandMeta className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <IoLogoInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-500 transition-colors"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-600">Call Us</p>
          <a
            href="tel:8888888888"
            className="text-gray-800 text-sm hover:underline"
          >
            <FiPhoneCall className="inline-block mr-2" />
            88888 88888
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm text-center">
          © 2025 <span className="font-medium">www.aura.com</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
