import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/ContextApp";
import { Link, useNavigate, useParams } from "react-router";
import { assets } from "../../assets/assets";
import SearchBar from "../../components/student/common/SearchBar";
import CourseCard from "../../components/student/common/CourseCard";

const CoursesList = () => {
  const { coursesData } = useContext(MyContext);
  const [filteredCourse, setFilteredCourse] = useState([]);
  const navigate = useNavigate();
  const { course } = useParams();

  useEffect(() => {
    if (course) {
      setFilteredCourse(
        coursesData.filter((item) =>
          item.courseTitle.toLowerCase().includes(course.toLowerCase()),
        ),
      );
    } else {
      setFilteredCourse(coursesData);
    }
  }, [course, coursesData]);

  return (
    <div className="px-3 pt-8 pb-96 sm:px-7 md:px-14 md:pt-20 lg:px-20 xl:px-40">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between md:gap-60">
        <div>
          <h2 className="text-fontBlack text-2xl font-semibold md:text-4xl">
            Course List
          </h2>
          <div className="text-fontGray pt-2 text-sm">
            <Link to="/" className="text-fontBlue">
              Home
            </Link>
            <span>/</span>
            <span>Course List</span>
          </div>
        </div>
        <SearchBar margin="mx-0" />
      </div>
      {course && (
        <div className="border-border rounded-5 mx-auto mt-4 flex max-w-64 justify-between border px-4 py-2 sm:mx-0">
          <p>{course}</p>
          <img
            src={assets.cross_icon}
            alt="cross icon"
            className="cursor-pointer"
            onClick={() => navigate("/courses-list")}
          />
        </div>
      )}
      <div className="grid grid-cols-1 gap-x-3 gap-y-5 px-8 pt-14 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
        {filteredCourse.map((courseData, index) => (
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
    </div>
  );
};

export default CoursesList;
