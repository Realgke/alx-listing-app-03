import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex flex-col md:flex-row md:justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-700">MyListingApp</div>

      {/* Navigation Links */}
      <nav className="flex space-x-4 mt-3 md:mt-0">
        <button className="text-gray-700 hover:text-blue-700">Sign In</button>
        <button className="text-white bg-blue-700 px-4 py-2 rounded-full hover:bg-blue-800">
          Sign Up
        </button>
      </nav>

      {/* Accommodation Types */}
      <div className="flex space-x-3 mt-3 md:mt-0">
        <span className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          Rooms
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          Mansion
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          Countryside
        </span>
      </div>

      {/* Search Bar */}
      <div className="mt-3 md:mt-0 md:ml-6 w-full md:w-64">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>
    </header>
  );
};

export default Header;
