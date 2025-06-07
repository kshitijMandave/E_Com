import { IoMdClose } from "react-icons/io";

function CartDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-1/4 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 border-b">
          <button onClick={onClose}>
            <IoMdClose className="text-2xl text-gray-700 hover:text-black" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
          <p>Your cart items will appear here.</p>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
