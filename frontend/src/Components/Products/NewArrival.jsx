import { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

function NewArrival() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [newArrivals, setNewArrivals] = useState([]);

  // Fetch new arrivals
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewArrivals();
  }, []);

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(currentScroll > 0);
    setCanScrollRight(currentScroll < maxScroll);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => updateScrollButtons();
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    updateScrollButtons();

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0 relative">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Step into the latest trends</h2>
        <p>Discover fresh arrivals curated just for your style.</p>
      </div>

      {/* Scroll Buttons */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="p-2 rounded-full shadow bg-white text-black disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          <FiChevronLeft className="text-2xl" />
        </button>
      </div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="p-2 rounded-full shadow bg-white text-black disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          <FiChevronRight className="text-2xl" />
        </button>
      </div>

      {/* Product Slider */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`container mx-auto overflow-x-scroll flex gap-4 sm:gap-6 px-4 lg:px-0 scrollbar-hide scroll-smooth transition-all duration-300 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {newArrivals.map((product, index) => {
          const firstImage = product.images?.[0];
          return (
            <div
              key={product.id || index}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={firstImage?.url || "/placeholder.png"}
                alt={firstImage?.altText || product.title || "Product Image"}
                className="w-full h-[500px] object-cover rounded-lg"
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-md text-black p-4 rounded-b-lg">
                <Link to={`/product/${product.id}`} className="block">
                  <h4 className="font-medium">
                    {product.title || product.name}
                  </h4>
                  <p className="mt-1">₹{product.price}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default NewArrival;
