import { useContext } from "react";
import { assets, dummyCourses } from "../../../assets/assets";
import { MyContext } from "../../../context/ContextApp";
import Rating from "./Rating";

const CourseCard = ({ ...props }) => {
  const { currency, calculateDiscount } = useContext(MyContext);
  const discount = calculateDiscount(props.price, props.discount);
  return (
    <article className="border-borderLight w-[263px] overflow-hidden rounded-lg border">
      <img
        className="max-w-full"
        src={[props.courseThumbnail]}
        alt="course thumbnail"
      />
      <div className="flex flex-col gap-1 px-5 pt-2.5 pb-9 text-left">
        <h3 className="font-semibold">{props.title}</h3>
        <p className="text-fontGray text-sm">Richard James</p>
        <Rating rating={props.rating} />
        <data className="font-semibold" value={discount}>
          {currency}
          {discount}
        </data>
      </div>
    </article>
  );
};

export default CourseCard;
