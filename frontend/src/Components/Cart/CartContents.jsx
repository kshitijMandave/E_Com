import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";

function CartContents({ cart, userId, guestId }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (product, delta) => {
    const newQuantity = product.quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        addToCart({
          productId: product._id, // use correct id
          quantity: newQuantity,
          size: product.size,
          color: product.color,
          userId,
          guestId,
        })
      );
    }
  };

  const handleRemove = (product) => {
    dispatch(
      removeFromCart({
        productId: product._id, // correct id
        size: product.size,
        color: product.color,
        userId,
        guestId,
      })
    );
  };

  return (
    <div>
      {cart.products.map((product, idx) => (
        <div
          key={idx}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4"
            />
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                {/* Decrease */}
                <button
                  onClick={() => handleQuantityChange(product, -1)}
                  className="border rounded px-2 py-1 text-xl font-medium"
                >
                  -
                </button>

                <span className="mx-4">{product.quantity}</span>

                {/* Increase */}
                <button
                  onClick={() => handleQuantityChange(product, 1)}
                  className="border rounded px-2 py-1 text-xl font-medium"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Remove */}
          <div>
            <p>${product.price.toLocaleString()}</p>
            <button onClick={() => handleRemove(product)}>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartContents;
