import CourseInfo from "../../components/student/course-details/CourseInfo";
import CourseStructure from "../../components/student/course-details/CourseStructure";

const CourseDetails = () => {
  return (
    <div className="bg-gradient-to-b from-[#E6FFFF] to-white px-3 pt-8 pb-96 sm:px-7 md:px-14 md:pt-20 lg:px-20 xl:px-40">
      <div className="flex flex-col-reverse md:flex-row md:gap-16">
        <div className="max-w-[653px]">
          <CourseInfo />
          <CourseStructure />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CourseDetails;
