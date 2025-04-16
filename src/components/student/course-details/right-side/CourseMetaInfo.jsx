import { useContext } from "react";
import { MyContext } from "../../../../context/ContextApp";
import { assets } from "../../../../assets/assets";

const CourseMetaInfo = ({ details }) => {
  const { calculateRating, calculateCourseDurations, calculateLecturesCount } =
    useContext(MyContext);
  const rating = calculateRating(details.courseRatings);

  return (
    <div className="text-fontGray pt-y flex items-center gap-2.5 px-6 py-5 text-sm md:pt-8 md:pb-6">
      <div className="flex items-center gap-1">
        <img
          src={rating > 0 ? assets.star : assets.star_blank}
          alt="star icon"
        />
        <p>{rating}</p>
      </div>
      <span>|</span>
      <div className="flex items-center gap-1">
        <img src={assets.time_clock_icon} alt="time clock icon" />
        <p>{calculateCourseDurations(details)}</p>
      </div>
      <span>|</span>
      <div className="flex items-center gap-1">
        <img src={assets.lesson_icon} alt="lesson icon" />
        <p>
          {calculateLecturesCount(details)}{" "}
          {calculateLecturesCount(details) > 0 ? "lessons" : "lesson"}
        </p>
      </div>
    </div>
  );
};

export default CourseMetaInfo;
