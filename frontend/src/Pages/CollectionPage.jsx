import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../Components/Products/FilterSideBar";
import SortOptions from "../Components/Products/SortOptions";
import ProductGrid from "../Components/Products/ProductGrid";

function CollectionPage() {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSideBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=1" }],
        },
        {
          id: 2,
          name: "Product 2",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500?random=2" }],
        },
        {
          id: 3,
          name: "Product 3",
          price: 150,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          id: 4,
          name: "Product 4",
          price: 90,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
        {
          id: 5,
          name: "Product 5",
          price: 110,
          images: [{ url: "https://picsum.photos/500/500?random=5" }],
        },
        {
          id: 6,
          name: "Product 6",
          price: 130,
          images: [{ url: "https://picsum.photos/500/500?random=6" }],
        },
        {
          id: 7,
          name: "Product 7",
          price: 95,
          images: [{ url: "https://picsum.photos/500/500?random=7" }],
        },
        {
          id: 8,
          name: "Product 8",
          price: 160,
          images: [{ url: "https://picsum.photos/500/500?random=8" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center mt-4 ml-4 bg-white shadow-md z-50"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSideBar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/*Sort Options */}
        <SortOptions />

        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default CollectionPage;
