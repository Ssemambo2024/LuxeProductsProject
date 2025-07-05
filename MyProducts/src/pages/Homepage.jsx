import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const GenericPage = () => {  
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full flex items-center justify-center p-4">
        <div className="w-full h-full min-h-[calc(100vh-8rem)] flex items-center justify-center">
          <div className="w-full max-w-5xl mx-4 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-gray-800/90 border border-gray-700/50 rounded-3xl shadow-2xl shadow-[#D4AF37]/10 backdrop-blur-sm relative overflow-hidden flex flex-col items-center justify-center">
            
            {/* Decorative corner elements */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/30"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/30"></div>
            
            {/* Main content with adjusted spacing */}
            <div className="text-center space-y-8 w-full max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F5F5F5] tracking-wider leading-tight">
                Luxe Products
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Explore our exclusive collection of premium goods, designed for those who seek elegance and quality.
              </p>
              
              <div className="pt-4">
                <a
                  href="/products"
                  className="inline-block px-10 py-4 bg-[#D4AF37] text-gray-900 font-medium text-sm uppercase tracking-wider rounded-lg hover:bg-[#F5F5F5] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/40 relative overflow-hidden group"
                >
                  <span className="relative z-10">Discover More</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-45 scale-150"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenericPage;