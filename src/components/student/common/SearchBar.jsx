import Button from "./Button";
import { assets } from "../../../assets/assets.js";

const SearchBar = () => {
  return (
    <form className="border-border rounded-5 relative mx-auto flex max-w-xl items-center justify-between gap-1 border px-1.5 py-1.5">
      <img
        src={assets.search_icon}
        alt="search icon"
        className="absolute left-3 w-2.5 md:w-4"
      />
      <input
        type="text"
        placeholder="Search for courses"
        className="placeholder:text-13 sm:placeholder:text-15 text-fontGray flex-1 py-2 pl-8 outline-0"
      />
      <Button rounded="rounded-5" width="w-36">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
