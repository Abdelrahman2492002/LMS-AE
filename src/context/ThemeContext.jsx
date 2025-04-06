import { createContext, useContext, useEffect, useMemo, useState } from "react";

const MyTheme = createContext();

export const useTheme = () => useContext(MyTheme);
const ThemeContext = ({ children }) => {
  const getFromLocalStorage = () => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : "light";
  };
  const [theme, setTheme] = useState(getFromLocalStorage);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return <MyTheme.Provider value={value}>{children}</MyTheme.Provider>;
};

export default ThemeContext;
