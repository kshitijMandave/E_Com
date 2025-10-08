import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../Components/Products/FilterSidebar";
import SortOptions from "../Components/Products/SortOptions";
import ProductGrid from "../Components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";

const CollectionPage = () => {
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const [isSideBarOpen, setSideBarOpen] = useState(false);

  // Fetch products whenever filters change
  useEffect(() => {
    const filters = Object.fromEntries([...searchParams]);
    dispatch(fetchProductsByFilters({ collection, ...filters }));
  }, [dispatch, collection, searchParams]);

  // Disable scroll when sidebar is open and remove horizontal scroll
  useEffect(() => {
    document.body.style.overflow = isSideBarOpen ? "hidden" : "auto";
    document.body.style.overflowX = "hidden"; // <- fix horizontal scroll
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [isSideBarOpen]);

  return (
    <div className="flex flex-col lg:flex-row overflow-x-hidden">
      {/* Mobile filter overlay */}
      {isSideBarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSideBarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white shadow-lg overflow-y-auto z-50
          transform transition-transform duration-300
          w-[95vw] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] max-w-full
          ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:shadow-none
        `}
      >
        <FilterSidebar
          isOpen={isSideBarOpen}
          onClose={() => setSideBarOpen(false)}
        />
      </div>

      {/* Mobile Filter Button */}
      <button
        onClick={() => setSideBarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        <FaFilter /> Filters
      </button>

      {/* Main Content */}
      <div className="flex-grow p-4 lg:p-8 overflow-x-hidden">
        <h2 className="text-2xl font-semibold uppercase mb-6 text-gray-800">
          {collection ? collection.replace("-", " ") : "All Collections"}
        </h2>

        {/* Sort Options */}
        <div className="mb-6">
          <SortOptions />
        </div>

        {/* Products Grid */}
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default CollectionPage;
