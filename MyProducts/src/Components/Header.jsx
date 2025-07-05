import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl border-b border-gray-700">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-6 md:space-x-10">
          <Link 
            to="/home" 
            className="relative text-[#D4AF37] hover:text-white text-lg md:text-xl font-medium transition-colors duration-300 group"
          >
            Home
            <span className="absolute left-0 bottom-[-4px] h-0.5 w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/products" 
            className="relative text-[#D4AF37] hover:text-white text-lg md:text-xl font-medium transition-colors duration-300 group"
          >
            Products
            <span className="absolute left-0 bottom-[-4px] h-0.5 w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <div className="text-[#D4AF37] italic font-serif text-xl md:text-2xl tracking-widest">
          Luxe Collections
        </div>
      </div>
    </header>
  );
};

export default Header;