import { dummyCourses } from "../../../assets/assets";
import Rating from "../common/Rating";

const CourseInfo = () => {
  const firstData = dummyCourses[0].courseRatings;
  return (
    <div>
      <h1 className="text-fontBlack text-2xl font-semibold md:text-4xl lg:text-[40px]">
        Build Text to image SaaS App in React JS
      </h1>
      <p className="text-fontGray pt-3 pb-4 text-sm md:pb-5 md:text-base">
        Master MERN Stack by building a Full Stack AI Text to Image SaaS App
        using React js, Mongodb, Node js, Express js and Stripe Payment
      </p>
      <Rating rating={firstData} color="text-fontBlue" />
      <p className="text-fontGray pt-2.5 md:pt-3">
        Course by <span className="text-fontBlue underline">Richard James</span>
      </p>
    </div>
  );
};

export default CourseInfo;
