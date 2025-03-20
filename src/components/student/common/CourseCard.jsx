import { useContext } from "react";
import { MyContext } from "../../../context/ContextApp";
import Rating from "./Rating";
import { Link } from "react-router";

const CourseCard = ({ ...props }) => {
  const { currency, calculateDiscount } = useContext(MyContext);
  const discount = calculateDiscount(props.price, props.discount);
  return (
    <Link
      to="/course-detail"
      className="border-borderLight flex max-w-full flex-col justify-end overflow-hidden rounded-lg border"
    >
      <img
        className="max-w-full"
        src={[props.courseThumbnail]}
        alt="course thumbnail"
      />
      <div className="flex flex-1 flex-col gap-1 px-5 pt-2.5 pb-6 text-left">
        <h3 className="font-semibold">{props.title}</h3>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-fontGray text-sm">Richard James</p>
          <Rating rating={props.rating} />
          <data className="font-semibold" value={discount}>
            {currency}
            {discount}
          </data>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
