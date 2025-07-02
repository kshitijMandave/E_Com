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
      Image: "",
    },
    {
      productId: "125397445468",
      name: "T-Shirt",
      size: "XL",
      color: "Red",
      price: 3356,
      quantity: 1,
      Image: "",
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
            <p className="text-emerald-700 text-sm">
              Estemated Delivery :{" "}
              {calculateEstimateDelivery(chekout.createdAt)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmationPage;
