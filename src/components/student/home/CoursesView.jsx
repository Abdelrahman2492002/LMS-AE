import { useContext } from "react";
import Heading from "../common/Heading";
import Paragrah from "../common/Paragrah";
import { MyContext } from "../../../context/ContextApp";
import CourseCard from "../common/CourseCard";

const CoursesView = () => {
  const { coursesForView } = useContext(MyContext);

  return (
    <div className="px-3 pb-32 sm:px-7 md:px-14 lg:px-28 xl:px-40">
      <Heading content="Learn from the best"></Heading>
      <Paragrah content="Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results." />
      <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 md:grid-cols-3">
        {coursesForView.map((courseData) => (
          <CourseCard
            courseThumbnail={courseData.courseThumbnail}
            title={courseData.courseTitle}
            rating={courseData.courseRatings}
            price={courseData.coursePrice}
            discount={courseData.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesView;
