import { assets } from "../../../assets/assets";
const CourseStructure = () => {
  return (
    <div className="text-fontMediumBlack pt-10 md:pt-14">
      <h2 className="text-xl font-semibold">Course Structure</h2>
      <p className="pt-1 pb-7 text-sm md:pb-5">
        22 sections - 54 lectures - 27h 25m total duration
      </p>
      <div>
        <div className="border-borderLight2 bg-mediumWhite2 flex cursor-pointer justify-between border px-3 py-4 md:px-6">
          <div className="flex gap-2 md:gap-4">
            <img src={assets.down_arrow_icon} alt="" />
            <p className="text-15 font-medium md:text-base">
              Project Introduction
            </p>
          </div>
          <p className="text-xs md:text-sm">3 lectures - 45 m</p>
        </div>
        <div className="p-5">
          <div>
            <img src={assets.play_icon} alt="play icon" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStructure;
