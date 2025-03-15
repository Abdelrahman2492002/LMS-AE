import { createContext } from "react";

export const MyContext = createContext();

const AppProvider = ({ children }) => {
  const value = {};
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default AppProvider;
