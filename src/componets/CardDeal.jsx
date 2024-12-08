import React, { useState } from "react";

const CardDeal = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-auto">
        {/* Image Section */}
        <div className="relative">
          <img
            src="/image/cardImg.webp"
            alt="Card"
            className="w-full h-48 object-cover"
          />
          {/* Heart Icon */}
          
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800 mb-2">Card Name</h1>
          <p className="text-gray-600 mb-4">
            This is a short description of the card content.
          </p>
          <div
            className=" flex justify-around text-3xl cursor-pointer select-none"
            onClick={toggleLike}
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Click me
          </button>
            {liked ? (
              <span className="text-red-500">❤️</span>
            ) : (
              <span className="text-gray-300">🤍</span>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeal;
