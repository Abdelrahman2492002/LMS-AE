import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { assets } from "../../../assets/assets";

const ThemeIcon = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative bottom-[-2px] h-5 w-5 cursor-pointer md:h-7 md:w-7">
      <img
        onClick={toggleTheme}
        src={assets.nightMode_icon}
        alt="Night Mode"
        className={`${theme === "light" ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} absolute w-full transition-all duration-300`} // إضافة تأثير opacity عند التبديل
      />
      <img
        onClick={toggleTheme}
        src={assets.lightMode_icon}
        alt="Light Mode"
        className={`${theme === "dark" ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} absolute w-full transition-all duration-300`} // إضافة تأثير opacity عند التبديل
      />
    </div>
  );
};

export default ThemeIcon;
