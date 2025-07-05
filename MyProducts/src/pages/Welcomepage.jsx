import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Welcomepage = () => {
  const handleLogin = () => {
    window.location.href = "http://127.0.0.1:8000/login/";
  };

  return (
    <div 
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="relative z-10">
        
      </div>

      <main className="flex-grow flex items-center justify-center relative z-10 p-6">
        <div className="w-full max-w-2xl p-12 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border border-gray-600/30 rounded-3xl shadow-2xl shadow-[#D4AF37]/20 backdrop-blur-sm text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/30"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/30"></div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#F5F5F5] mb-8 tracking-widest leading-tight">
            Welcome to Luxe Products
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Explore a world of exquisite craftsmanship and unparalleled elegance.
          </p>
          <button
            onClick={handleLogin}
            className="px-10 py-3 bg-[#D4AF37] text-gray-900 font-medium text-sm uppercase tracking-wider rounded-lg hover:bg-[#F5F5F5] hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/40 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-45 scale-150"></span>
          </button>
        </div>
      </main>

      <div className="relative z-10">
        
      </div>
    </div>
  );
};

export default Welcomepage;