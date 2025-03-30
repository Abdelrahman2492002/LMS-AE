import { useContext } from "react";
import { MyContext } from "../../../../context/ContextApp";
import CourseChapter from "./CourseChapter";

const CourseStructure = ({ details, liftChapter }) => {
  const { calculateLecturesCount, calculateCourseDurations } =
    useContext(MyContext);

  return (
    <div className="text-fontMediumBlack pt-10 md:pt-14">
      <h2 className="text-xl font-semibold">Course Structure</h2>
      <div className="flex items-center gap-1 pt-1 pb-7 text-sm md:pb-5">
        <p> {details.courseContent.length} sections -</p>
        <p>{calculateLecturesCount(details)} lectures -</p>
        <p>{calculateCourseDurations(details)} total duration</p>
      </div>
      <div>
        {details.courseContent.map((chapter, index) => (
          <CourseChapter key={index} chapter={chapter} />
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;
