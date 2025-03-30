import { useContext } from "react";
import { MyContext } from "../../../context/ContextApp";
import { assets } from "../../../assets/assets";
import YouTube from "react-youtube";

const CoursePricing = ({ details }) => {
  const { calculateDiscount, currency, playerData } = useContext(MyContext);
  const finalPrice = calculateDiscount(details.coursePrice, details.discount);

  return (
    <>
      {playerData ? (
        <YouTube
          videoId={playerData.videoId}
          iframeClassName="h-full w-full aspect-video"
        />
      ) : (
        <img src={details.courseThumbnail} alt="course thumbnail" />
      )}
      <div className="px-6">
        <div className="flex items-center gap-1 pt-5">
          <img src={assets.time_left_clock_icon} alt="time clock icon" />
          <p className="text-primaryOrange text-15 md:text-base">
            <span className="font-semibold">5 days </span>left at this price!
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <data
            className="text-fontBlack text-2xl font-semibold md:text-4xl"
            value={finalPrice}
          >
            {currency}
            {finalPrice}
          </data>
          <data
            className="text-15 text-fontGray line-through md:text-lg"
            value={details.coursePrice}
          >
            {currency}
            {details.coursePrice}
          </data>
          <data className="text-15 text-fontGray md:text-lg" value={50}>
            50% off
          </data>
        </div>
      </div>
    </>
  );
};

export default CoursePricing;
