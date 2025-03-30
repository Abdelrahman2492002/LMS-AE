import DOMPurify from "dompurify";
import Rating from "../../common/Rating";

const CourseInfo = ({ details }) => {
  const sanitizedDescription = DOMPurify.sanitize(details.courseDescription);
  return (
    <div>
      <h1 className="text-fontBlack text-2xl font-semibold md:text-4xl lg:text-[40px]">
        {details.courseTitle}
      </h1>
      <p
        className="text-fontGray pt-3 pb-4 text-sm md:pb-5 md:text-base"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription.slice(0, 200) }}
      ></p>
      <div className="text-fontGray flex items-center gap-2 text-sm">
        <Rating rating={details.courseRatings} color="text-fontBlue" />
        <p>
          {details.enrolledStudents.length}
          {details.enrolledStudents.length > 1 ? " students" : " student"}
        </p>
      </div>
      <p className="text-fontGray pt-2.5 md:pt-3">
        Course by <span className="text-fontBlue underline">Richard James</span>
      </p>
    </div>
  );
};

export default CourseInfo;
