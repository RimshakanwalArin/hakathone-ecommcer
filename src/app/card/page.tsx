import React from "react";
import { FaTrash } from "react-icons/fa";

const BagItem = ({
  imageSrc,
  title,
  color,
  size,
  price,
  quantity,
}: {
  imageSrc: string;
  title: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}) => {
  return (
    <div className="flex items-center border-b pb-4 mb-6 last:border-none last:mb-0">
      {/* Product Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-24 h-24 rounded-md object-cover shadow-md"
      />

      {/* Product Details */}
      <div className="ml-6 flex-1">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          <span className="text-teal-600 font-medium">{color}</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">Size: {size}</p>
        <div className="flex items-center mt-3 space-x-2">
          <label htmlFor="quantity" className="text-gray-600 text-sm">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            defaultValue={quantity}
            min={1}
            className="border rounded-md w-12 text-center focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>
      </div>

      {/* Product Price and Actions */}
      <div className="text-right">
        <p className="text-base font-bold text-gray-800">MRP: ${price}</p>
        <button className="text-red-500 hover:text-red-700 flex items-center mt-3">
          <FaTrash className="mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
};

const Card = () => {
  const items = [
    {
      imageSrc: "/hero01.png",
      title: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      price: 99,
      quantity: 1,
    },
    {
      imageSrc: "/her3.png",
      title: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      price: 99,
      quantity: 1,
    },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Bag Section */}
      <div className="col-span-2">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-6">Shopping Bag</h1>
        {items.map((item, index) => (
          <BagItem key={index} {...item} />
        ))}
      </div>

      {/* Summary Section */}
      <div className="p-6 border rounded-lg shadow-lg bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between text-gray-800 font-bold text-lg">
            <p>Total</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
        </div>
        <button className="w-full mt-6 py-3 bg-teal-600 text-white font-semibold text-lg rounded-md hover:bg-teal-700 transition-all">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Card;
