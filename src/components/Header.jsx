import React from "react";

function Header() {
  return (
    <header className="w-full sticky top-0 z-50 ">
      {/* Amazon like Header */}

      {/* Top Navbar */}
      <div className="flex items-center bg-[#131921] text-white px-4 py-2 gap-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <h1 className="font-extrabold text-4xl text-cyan-500">
            ShoppyGlobe 🌐
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 h-10 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search ShoppyGlobe"
            className="flex-1 px-3 text-white bg-[#232f3e]"
          />
          <button className="px-4 text-white bg-orange-500">
            Search
          </button>
        </div>

        {/* Cart */}
        <div className="flex items-center cursor-pointer">
          🛒
          <span className="font-bold ml-2">Cart</span>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-[#232f3e] text-white text-sm px-5 py-2 flex items-center gap-8 overflow-x-auto">
        <span className="font-bold cursor-pointer">☰ All</span>
        <span className="cursor-pointer whitespace-nowrap">Beauty</span>
        <span className="cursor-pointer whitespace-nowrap">Fragrances</span>
        <span className="cursor-pointer whitespace-nowrap">Furniture</span>
        <span className="cursor-pointer whitespace-nowrap">Groceries</span>
      </div>
    </header>
  );
}

export default Header;
