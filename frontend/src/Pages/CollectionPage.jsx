import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../Components/Products/FilterSideBar";

function CollectionPage() {
  const [products, setProducts] = useEffect();
  const sidebarref = useRef(null);
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarOpen(!isSideBarOpen);
  };
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
      <button className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2" />
      </button>
      {/* Filter Sidebar */}
      <div ref={sidebarref}>
        <FilterSideBar />
      </div>
    </div>
  );
}

export default CollectionPage;
