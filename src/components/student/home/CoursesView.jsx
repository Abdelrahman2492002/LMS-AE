import { useContext } from "react";
import Heading from "../common/Heading";
import Paragrah from "../common/Paragrah";
import { MyContext } from "../../../context/ContextApp";
import CourseCard from "../common/CourseCard";
import { Link } from "react-router";

const CoursesView = () => {
  const { coursesForView } = useContext(MyContext);

  return (
    <div className="px-3 pb-32 sm:px-7 md:px-14 lg:px-20 xl:px-40">
      <Heading content="Learn from the best"></Heading>
      <Paragrah content="Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results." />
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 px-8 pt-6 pb-11 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
        {coursesForView.map((courseData, index) => (
          <CourseCard
            id={courseData._id}
            courseThumbnail={courseData.courseThumbnail}
            title={courseData.courseTitle}
            rating={courseData.courseRatings}
            price={courseData.coursePrice}
            discount={courseData.discount}
            key={index}
          />
        ))}
      </div>
      <Link
        onClick={() => scrollTo(0, 0)}
        to="/courses-list"
        className="text-13 md:text-15 hover:bg-gradient hover:text-fontGray text-ligthGray mx-auto cursor-pointer rounded-sm border border-[#6B728080] px-4 py-2 transition-colors"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesView;
