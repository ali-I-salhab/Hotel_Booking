import { UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
const NavBar = () => {
  return (
    <div className="flex flex-row items-center  justify-between px-4 md:px-8 border border-gray-300 py-3 bg-white transition-all duration-300">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="h-9 invert opacity-80" />
      </Link>
      <p className="font-semibold self-center bg-amber-400 px-3 py-1 rounded-full">
        Owner Dashboard
      </p>
      <UserButton />
    </div>
  );
};

export default NavBar;
