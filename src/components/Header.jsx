import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItem =useSelector((store)=>store.cart.items)
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
        <Link to="/cart"><div className="flex items-center cursor-pointer">
          <span className="flex flex-col">{cartItem.length}🛒</span>
          <span className="font-bold ml-2">Cart</span>
        </div></Link>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-[#232f3e] text-white text-sm px-5 py-2 flex items-center gap-8 overflow-x-auto">
        <Link to="/"><span className="font-bold cursor-pointer">☰ All</span></Link>
        <Link to="/category/beauty"><span className="cursor-pointer whitespace-nowrap">Beauty</span></Link>
        <Link to="/category/fragrances"><span className="cursor-pointer whitespace-nowrap">Fragrances</span></Link>
        <Link to="/category/furniture"><span className="cursor-pointer whitespace-nowrap">Furniture</span></Link>
        <Link to="/category/groceries"><span className="cursor-pointer whitespace-nowrap">Groceries</span></Link>
      </div>
    </header>
  );
}

export default Header;
