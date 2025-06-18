import React from "react";
import { Link } from "react-router-dom";
import featuredCollection from "./images/FeaturedCollection.jpg";

function FeaturedCollection() {
  return (
    <section className="py-20 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl  overflow-hidden transition-all duration-300">
        {/* Left Content */}
        <div className="lg:w-1/2 p-10 text-center lg:text-left animate-fade-in">
          <h2 className="text-base uppercase font-semibold text-green-700 mb-3 tracking-wide">
            Not Just Apparel, It's a Lifestyle
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Redefining Everyday Fashion
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            From chill weekends to bold weekdays explore essentials that offer
            the perfect balance between laid-back comfort and street-smart
            style. It's more than fashion; it’s how you live. Step into everyday
            luxury.
          </p>
          <Link
            to="/collection/all"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Content (Image) */}
        <div className="lg:w-1/2 h-80 lg:h-[500px] w-full">
          <img
            src={featuredCollection}
            alt="Featured Collection"
            className="w-full h-full object-cover object-center lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
