import { RiDeleteBin3Line } from "react-icons/ri";
function CartContents() {
  const cartProducts = [
    {
      productId: "1",
      name: "T Shirt",
      size: "M",
      colur: "Red",
      quantity: "1",
      price: "200",
      image:
        "https://th.bing.com/th/id/OIP.GQ12ja0h5CjFwcKZHdxFDwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp1&o=7&rm=3",
    },
    {
      productId: "2",
      name: "Jense",
      size: "32",
      colur: "Blur",
      quantity: "1",
      price: "1000",
      image:
        "https://th.bing.com/th/id/OIP.VZHs3XIvxlYplyAOUfmkqgHaLH?r=0&rs=1&pid=ImgDetMain&cb=idpwebp1&o=7&rm=3",
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
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600 " />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartContents;
