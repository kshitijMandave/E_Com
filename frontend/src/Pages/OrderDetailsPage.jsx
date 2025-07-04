import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OrderDetailsPage() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDeliverd: false,
      paymentMethod: "",
      shippingMethod: "",
      shippingAddress: "",
      orderItems: [
        { productId: "1", name: "Jacket", price: 123, quantity: 1, image: "" },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
    </div>
  );
}

export default OrderDetailsPage;
