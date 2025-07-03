const chekout = {
  _id: 12355,
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1253978",
      name: "Jacket",
      size: "M",
      color: "Black",
      price: 133,
      quantity: 1,
      Image:
        "https://www.bing.com/th/id/OIP.bO4pS4CxtlOHb0LsEMiIWwHaIf?w=171&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    },
    {
      productId: "125397445468",
      name: "T-Shirt",
      size: "XL",
      color: "Red",
      price: 3356,
      quantity: 1,
      Image:
        "https://www.bing.com/th/id/OIP.SAEHv-JSa7p8FJHvMCyBTQHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    },
  ],
  ShipingAddress: {
    address: "Near Gram Panchayat, Lawari",
    city: "Sakoli",
    country: "India",
  },
};

function OrderConfirmationPage() {
  const calculateEstimateDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 5); // Add 5 days to the order date
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for your Oorder
      </h1>
      {chekout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order ID and Date */}
            <div>
              <h2 className="text-xl font-semibold">Order ID :{chekout._id}</h2>
              <p className="text-gray-500">
                Order Date : {new Date(chekout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estemated Delivery :{" "}
                {calculateEstimateDelivery(chekout.createdAt)}
              </p>
            </div>
          </div>
          <div className="mb-20">
            {chekout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4 ">
                <img
                  src={item.Image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">$ {item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Payment and Delivery Information */}
          <div className="grid grid-cols-2 gap-8">
            {/* Payment Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>
            {/* Delivery Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {chekout.ShipingAddress.address}, {chekout.ShipingAddress.city},{" "}
                {chekout.ShipingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmationPage;
