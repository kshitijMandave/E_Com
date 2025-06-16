import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

function CartDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0" onClick={onClose}></div>}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-[25rem] bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <IoMdClose className="text-2xl text-gray-700 hover:text-black" />
          </button>
        </div>

        {/* Cart Content with scrollable area */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xm font-semibold mb-4">Your Cart</h2>
          <CartContents />
        </div>

        {/* Checkout button fixed at the bottom */}
        <div className="p-4 sticky bottom-0 bg-white">
          <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded mb-2">
            Checkout
          </button>
          <p className="text-xs text-gray-500 text-center">
            Shipping, taxes, and discount codes calculated at checkout.
          </p>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
