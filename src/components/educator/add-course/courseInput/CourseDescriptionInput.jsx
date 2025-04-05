import Quill from "quill";
import { useEffect, useRef } from "react";

const CourseDescriptionInput = ({ handleChange }) => {
  const quillRef = useRef(null);
  const editorInstance = useRef(null);

  useEffect(() => {
    if (quillRef.current && !editorInstance.current) {
      editorInstance.current = new Quill(quillRef.current, { theme: "snow" });
    }

    editorInstance.current.on("text-change", () => {
      handleChange(
        "setCourseDescription",
        editorInstance.current.root.innerHTML,
      );
    });
  }, [handleChange]);

  return (
    <div className="flex w-full flex-col">
      <label htmlFor="course-description" className="text-ExtraLigthGray mb-2">
        Course Description
      </label>
      <div
        ref={quillRef}
        id="course-description"
        className="border-sideBorder rounded-sm border p-2 outline-0"
      ></div>
    </div>
  );
};

export default CourseDescriptionInput;
