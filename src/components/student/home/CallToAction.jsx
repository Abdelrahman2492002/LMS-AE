import { assets } from "../../../assets/assets";
import Paragrah from "../common/Paragrah";

const CallToAction = () => {
  return (
    <div className="pb-36">
      <h2 className="text-darkBlue text-xl leading-11 font-semibold sm:text-4xl">
        Learn anything, anytime, anywhere
      </h2>
      <Paragrah
        color="text-mediumBlue"
        content="Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea."
      />
      <div className="mx-auto flex justify-center gap-4 pt-8 text-xs font-medium md:text-sm">
        <button className="rounded-5 bg-secondBlue hover:bg-primaryBlue cursor-pointer px-4 py-2 text-white transition-colors md:px-7 md:py-3">
          Get started
        </button>
        <div className="flex items-center gap-2">
          <button className="cursor-pointer">Learn more</button>
          <img
            src={assets.arrow_icon}
            alt="arrow icon"
            className="w-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
