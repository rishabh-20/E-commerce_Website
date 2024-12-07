import React from "react";

function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white">
      <div className="bg-white/15 backdrop-blur-md rounded-lg p-6 sm:p-8 max-w-sm w-full shadow-md text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-5 text-white">Register</h2>
        <form className="flex flex-col gap-5">
          <div className="text-left">
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#6a11cb]"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm mb-2 text-gray-300">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#6a11cb]"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#6a11cb]"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm mb-2 text-gray-300">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#6a11cb]"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#6a11cb]"
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 font-bold text-white bg-[#2575fc] rounded shadow hover:bg-[#6a11cb] transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
