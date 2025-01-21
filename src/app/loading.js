import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      {/* Full-Screen Overlay */}
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        {/* E-commerce Loading Animation */}
        <div className="flex justify-center items-center space-x-2 animate-pulse">
          <img
          src="/_assets/loading.png"
            // src="https://img.icons8.com/ios/452/shopping-cart.png"
            alt="loading"
            className="h-14 w-14 text-white text-bold"
          />
          <div className="text-3xl text-white font-semibold">Loading...</div>
        </div>

        {/* Motivational Quote */}
        <div className="text-lg text-white text-center font-light">
          "Your shopping experience is just a moment away!"
        </div>

        {/* Optional: Background animation */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 animate-pulse"></div> */}
      </div>
    </div>
  );
};

export default Loading;
