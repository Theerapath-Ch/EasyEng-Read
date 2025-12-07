"use client";
import "../../components/home/navbar.css";
import { TableOfContents } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { opentAndCloseNabar } from "./ts/opentAndCloseNabar";

const NavbarLeft = () => {
  
  return (
<div id="navbar" className=" sticky z-2 bg border-r-2 rounded-br-4xl md:rounded-br-full  md:border-r-4  md:h-dvh md:w-auto  md:flex md:justify-between  md:flex-col shadow-2xl  " onClick={() => opentAndCloseNabar("navbar")}>
      <div className=" text-center p-4 bgImage flex justify-center items-center shadow-xl" >
        <img
          className=""
          src="../img/logo1.png"
          width={50}
        />
        <p className="text-lg ">EasyEng Read</p>
      </div>

      <div  className="w-full h-full text-center  flex flex-col justify-center items-center " >
        <TableOfContents color="black" size={25}   />
      </div>

      {/* <div className="w-full text-center text-2xl  rounded-t-lg bgBtn p-2 flex justify-center gap-2  ">
        <div className="border-2 border-blue-500 rounded-full p-2">
          <Facebook color="black" size={35} />
        </div>
        <div className="border-2 border-pink-500 rounded-full p-2">
          <Instagram color="black" size={35} />
        </div>
      </div> */}
    </div>
  );
};

export default NavbarLeft;
