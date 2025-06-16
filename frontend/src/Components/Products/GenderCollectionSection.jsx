import menCollections from "./images/mens-collections.jpg";
import womenCollections from "./images/women-collections.jpg";
import { Link } from "react-router-dom";

function GenderCollectionSection() {
  return (
    <section className="py-16 px-4 lg:px-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's Collections */}
        <div className="relative w-full md:w-1/2 h-[400px]">
          <img
            src={womenCollections}
            alt="Women's Collections"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-xl font-semibold mb-2">Women's Collections</h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collections */}
        <div className="relative w-full md:w-1/2 h-[400px]">
          <img
            src={menCollections}
            alt="Men's Collections"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-xl font-semibold mb-2">Men's Collections</h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenderCollectionSection;
