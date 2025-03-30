import Loading from "../common/Loading";
import SearchBar from "../common/SearchBar";
import TrustedCompanies from "./TrustedCompanies";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#E6FFFF] to-white px-3 pt-24 pb-32 sm:px-7 md:px-14 lg:px-28 xl:px-40">
      <h1 className="max-w-3xl text-[28px] leading-9 font-bold md:text-5xl md:leading-16">
        Empower your future with the courses designed to
        <span className="text-primaryBlue"> fit your choice.</span>
      </h1>
      <p className="text-fontGray hidden max-w-[560px] pt-6 leading-6 sm:block">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <p className="text-fontGray text-13 max-w-[284px] pt-6 leading-4 sm:hidden">
        We bring together world-class instructors to help you achieve your
        professional goals.
      </p>
      <div className="w-xl max-w-full pt-9 md:pt-11">
        <SearchBar />
      </div>
      <TrustedCompanies />
    </div>
  );
};

export default HeroSection;
