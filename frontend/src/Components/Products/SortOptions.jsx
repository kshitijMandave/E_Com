import { useSearchParams } from "react-router-dom";

function SortOptions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy); //  match the key consistently
    setSearchParams(searchParams);
  };

  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        className="border p-2 rounded-md focus:outline-none"
      >
        <option value="">Default</option>
        <option value="new">What's New</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="popularity">Popularity</option>
        <option value="discount">Better Discount</option>
        <option value="rating">Customer Rating</option>
      </select>
    </div>
  );
}

export default SortOptions;
