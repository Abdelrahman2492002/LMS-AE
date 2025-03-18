import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const MyContext = createContext();

const AppProvider = ({ children }) => {
  const [coursesData, setCoursesData] = useState(dummyCourses);
  const [coursesForView, setCoursesForView] = useState([]);

  const currency = import.meta.env.VITE_CURRENCY;

  const calculateRating = (rating) => {
    if (!rating.length) return 0;
    const totalRating = rating.reduce(
      (total, current) => total + current.rating,
      0,
    );

    return totalRating / rating.length;
  };

  const calculateDiscount = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  useEffect(() => {
    if (coursesData.length) {
      setCoursesForView(coursesData.slice(0, 4));
    }
  }, [coursesData]);
  const value = {
    coursesData,
    coursesForView,
    calculateRating,
    currency,
    calculateDiscount,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default AppProvider;
