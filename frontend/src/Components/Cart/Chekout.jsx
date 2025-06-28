import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=3" }],
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      images: [{ url: "https://picsum.photos/500/500?random=4" }],
    },
  ],
  totalPrice: 195,
};
function Chekout() {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateChekout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/*left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6 ">Checkout</h2>
        <form onSubmit={handleCreateChekout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                className="w-full p-2 border rounded"
                onChange={(e) => {
                  setShippingAddress({
                    ...setShippingAddress,
                    firstName: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                className="w-full p-2 border rounded"
                onChange={(e) => {
                  setShippingAddress({
                    ...setShippingAddress,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="address"
              value={shippingAddress.address}
              className="w-full p-2 border rounded"
              onChange={(e) => {
                setShippingAddress({
                  ...setShippingAddress,
                  address: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                className="w-full p-2 border rounded"
                onChange={(e) => {
                  setShippingAddress({
                    ...setShippingAddress,
                    city: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code </label>
              <input
                type="number"
                value={shippingAddress.postalCode}
                className="w-full p-2 border rounded"
                onChange={(e) => {
                  setShippingAddress({
                    ...setShippingAddress,
                    postalCode: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              className="w-full p-2 border rounded"
              onChange={(e) => {
                setShippingAddress({
                  ...setShippingAddress,
                  country: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={shippingAddress.phone}
              className="w-full p-2 border rounded"
              onChange={(e) => {
                setShippingAddress({
                  ...setShippingAddress,
                  phone: e.target.value,
                });
              }}
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                {/*Paypal button Component */}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chekout;
