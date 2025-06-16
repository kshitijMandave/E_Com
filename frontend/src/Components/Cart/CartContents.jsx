import React from "react";

function CartContents() {
  const cartProducts = [
    {
      productId: "1",
      name: "T Shirt",
      size: "M",
      colur: "Red",
      quantity: "1",
      price: "200",
      image: "",
    },
    {
      productId: "2",
      name: "Jense",
      size: "32",
      colur: "Blur",
      quantity: "1",
      price: "1000",
      image: "",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size:{product.size} | color : {product.colur}
              </p>
              <div className="flex items-center mt-2 ">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartContents;
