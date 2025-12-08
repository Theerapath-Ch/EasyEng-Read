"use client";
import "./navbar.css";
import { TableOfContents } from "lucide-react";
import { Pentagon } from 'lucide-react';

import { opentAndCloseNabar } from "../../utill/opentAndCloseNabar";
import Catagory from "./Category";


const Navbar = () => {

  return (
    // onClick={() => opentAndCloseNabar("navbar")}
    <div id="navbar" className=" bg flex justify-between  shadow-2xl  px-5  "  >
      <a href="/">
        <div className=" text-center flex justify-center items-center gap-3 px-3 py-1 " >
          <img
            className=""
            src="../logo/logo1.png"
            alt="logo"
            width={50}
          />
          <p className="lg:text-2xl lg:block hidden  ">EasyEng Read</p>
        </div>
      </a>

      <Catagory />

      <div>
        <div className="border-r-6 border-amber-600 h-full absolute right-0"></div>
      </div>

    </div>
  );
};

export default Navbar;
