import { useReducer } from "react";

import {
  initialMainValues,
  courseReducer,
} from "../../components/educator/add-course/courseReducer";
import AddCourseInput from "../../components/educator/add-course/courseInput/AddCourseInput";
import CourseDescriptionInput from "../../components/educator/add-course/courseInput/CourseDescriptionInput";
import CoursePriceInput from "../../components/educator/add-course/courseInput/CoursePriceInput";
import UploadThumbnail from "../../components/educator/add-course/courseInput/UploadThumbnail";
import AddChaptersAndLectures from "../../components/educator/add-course/add-chapters&lectures/AddChaptersAndLectures";

const AddCourse = () => {
  const [state, dispatch] = useReducer(courseReducer, initialMainValues);

  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen p-5 md:px-9 md:py-6">
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <AddCourseInput
          id="course-title"
          title="Course Title"
          value={state.courseTitle}
          handleChange={(e) => handleChange("setCourseTitle", e.target.value)}
        />
        <AddCourseInput
          id="course-headings"
          title="Course Headings"
          value={state.courseHeading}
          handleChange={(e) => handleChange("setCourseHeading", e.target.value)}
        />
        <CourseDescriptionInput handleChange={handleChange} />
        <div className="flex items-end justify-between max-sm:gap-1">
          <CoursePriceInput
            id="course-price"
            title="Course Price"
            value={state.coursePrice}
            handleChange={(e) => handleChange("setCoursePrice", e.target.value)}
          />
          <UploadThumbnail
            image={state.image}
            handleChange={(e) => handleChange("setImage", e.target.files[0])}
          />
        </div>
        <CoursePriceInput
          id="discount"
          title="Discount %"
          max={100}
          value={state.courseDiscount}
          handleChange={(e) =>
            handleChange("setCourseDiscount", e.target.value)
          }
        />
        <AddChaptersAndLectures />
        <button
          type="submit"
          className="mt-2.5 max-w-24 cursor-pointer rounded-sm bg-black px-7 py-2 text-white"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
