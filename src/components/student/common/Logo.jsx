import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router";
import { useTheme } from "../../../context/ThemeContext";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <Link to="/">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="logo icon"
        className="w-20 cursor-pointer md:w-[114px]"
      />
    </Link>
  );
};

export default Logo;
