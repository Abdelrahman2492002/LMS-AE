import React, { useContext } from "react";
import { MyContext } from "../../../context/ContextApp";
import { assets } from "../../../assets/assets";

const Rating = ({ rating }) => {
  const { calculateRating } = useContext(MyContext);
  const courseRating = calculateRating(rating);
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <p className="text-mediumGray font-medium">{courseRating}</p>
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, index) => (
          <img
            src={index < courseRating ? assets.star : assets.star_blank}
            alt="star icon"
            className="w-3.5"
            key={index}
          />
        ))}
      </div>
      <p className="text-ligthGray">({rating.length})</p>
    </div>
  );
};

export default Rating;
