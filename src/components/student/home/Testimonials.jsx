import { dummyTestimonial } from "../../../assets/assets";
import Heading from "../common/Heading";
import Paragrah from "../common/Paragrah";
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  return (
    <div className="px-3 pb-32 sm:px-7 md:px-14 lg:px-20 xl:px-40">
      <Heading content="Testimonials" />
      <Paragrah content="Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives." />
      <div className="grid grid-cols-1 items-start gap-7 px-8 pt-8 sm:grid-cols-2 sm:px-0 lg:grid-cols-3">
        {dummyTestimonial.map((testimon, index) => (
          <TestimonialCard
            image={testimon.image}
            name={testimon.name}
            role={testimon.role}
            rating={testimon.rating}
            feedback={testimon.feedback}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
