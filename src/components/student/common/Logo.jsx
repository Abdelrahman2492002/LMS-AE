import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={assets.logo}
        alt="logo icon"
        className="w-20 cursor-pointer md:w-[114px]"
      />
    </Link>
  );
};

export default Logo;
