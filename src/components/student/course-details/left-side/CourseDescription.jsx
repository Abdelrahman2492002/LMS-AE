import DOMPurify from "dompurify";

const CourseDescription = ({ details }) => {
  const sanitizedDescription = DOMPurify.sanitize(details.courseDescription);
  return (
    <div>
      <h2 className="text-mediumBlack pt-10 text-xl font-semibold">
        Course Description
      </h2>
      <p
        className="rich-text text-fontGray text-sm"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      ></p>
    </div>
  );
};

export default CourseDescription;
