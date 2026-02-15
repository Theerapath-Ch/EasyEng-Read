"use client";



import Catagory from "../navbar/Category";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-lg">
        {/* Gradient bottom line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>

        <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3">

          {/* Logo Section */}
          <a href="/" className="group flex items-center gap-2 md:gap-3">
            <img
              src="../logo/logo1.png"
              alt="logo"
              width={40}
              className="transition duration-300 group-hover:scale-110 md:w-[50px]"
            />

            {/* ซ่อนชื่อเว็บในจอเล็ก */}
            <p className="hidden sm:block text-xl md:text-2xl font-extrabold tracking-wide 
              bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 
              bg-clip-text text-transparent">
              EasyEng Read
            </p>
          </a>

          {/* Category Menu (Desktop/Tablet) */}
          <div className="hidden md:block">
            <Catagory />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Hamburger (Mobile only) */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden px-4 pb-4 animate-fadeIn">
            <Catagory />
          </div>
        )}
      </div>
    </>

  );
};

export default Navbar;
