import Button from "./Button";
import { assets } from "../../../assets/assets.js";
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = ({ search }) => {
  const [searchedCourse, setSearchedCourse] = useState(search || "");

  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (searchedCourse) {
      navigate("/courses-list/" + searchedCourse);
    }
  };
  return (
    <form
      onSubmit={onSearchHandler}
      className="border-border rounded-5 relative flex flex-1 items-center justify-between gap-1 border px-1 py-1"
    >
      <img
        src={assets.search_icon}
        alt="search icon"
        className="absolute left-3 w-2.5 md:w-5"
      />
      <input
        type="text"
        placeholder="Search for courses"
        className="placeholder:text-13 sm:placeholder:text-15 text-fontGray min-w-0 flex-1 shrink py-2 pl-7 outline-0 sm:pl-9"
        onChange={(e) => setSearchedCourse(e.target.value)}
        value={searchedCourse}
      />
      <Button rounded="rounded-5" width="w-18 sm:w-36">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
