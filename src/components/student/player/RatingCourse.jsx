import { useState } from "react";

const RatingCourse = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center gap-4 pt-8 md:pt-12">
      <h3 className="text-xl font-bold">Rate Course:</h3>
      <div>
        {Array.from({ length: 5 }, (_, index) => {
          const startValue = index + 1;
          return (
            <span
              onClick={() => setRating(startValue)}
              className={`mr-1 cursor-pointer text-xl text-gray-400 md:text-2xl ${startValue <= rating ? "text-yellow-400" : "text-gray-400"}`}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RatingCourse;
