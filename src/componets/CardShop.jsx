import React from "react";
import HertIcon from "./HertIcon";
const CardShop = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Shop Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4"
          >
            <img
              className="w-full h-48 object-cover rounded-t-md hover:h-52 transition duration-500"
              src={product.imgUrl}
              alt={product.name}
            />
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {product.name} Chair
              </h4>
              <p className="text-center text-gray-600">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
              <HertIcon/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardShop;
