import { assets } from "../../../assets/assets";

const TestimonialCard = ({ ...props }) => {
  return (
    <article className="border-borderLight overflow-hidden rounded-lg border text-left shadow-[0px_4px_15px_#0000000D]">
      <div className="bg-mediumWhite flex items-center gap-5 px-4 pt-4 pb-2.5 font-medium">
        <img
          src={props.image}
          alt="priofile image"
          className="w-12 rounded-full"
        />
        <div>
          <p className="text-mediumPurble text-lg">{props.name}</p>
          <p className="text-mediumPurble2 text-xs">{props.role}</p>
        </div>
      </div>
      <div className="bg-white p-6 pr-16">
        <div className="flex gap-0.5 pb-2.5">
          {[...Array(5)].map((_, index) => (
            <img
              src={index < 5 ? assets.star : assets.star_blank}
              alt="star icon"
              className="w-5"
            />
          ))}
        </div>
        <p className="text-ExtraLigthGray text-sm leading-6">
          {props.feedback}
        </p>
        <button className="text-fontBlue cursor-pointer pt-6 text-sm underline">
          Read more
        </button>
      </div>
    </article>
  );
};

export default TestimonialCard;
