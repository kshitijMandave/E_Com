import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const { user, guestId } = useSelector((state) => state.cart);
  const userId = user?._id || null;

  const handleCheckout = () => {
    onClose();
    if (!user) navigate("/login?redirect=checkout");
    else navigate("/checkout");
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-[28rem] bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <IoMdClose className="text-2xl text-gray-700 hover:text-black" />
          </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
          {cart?.products?.length > 0 ? (
            <CartContents cart={cart} userId={userId} guestId={guestId} />
          ) : (
            <p>Your Cart is empty</p>
          )}
        </div>

        {cart?.products?.length > 0 && (
          <div className="p-4 sticky bottom-0 bg-white">
            <button
              onClick={handleCheckout}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded mb-2"
            >
              Checkout
            </button>
            <p className="text-xs text-gray-500 text-center">
              Shipping, taxes, and discount codes calculated at checkout.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;
