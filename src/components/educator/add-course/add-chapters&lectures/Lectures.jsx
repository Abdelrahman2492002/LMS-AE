import React from "react";
import { assets } from "../../../../assets/assets";

const Lectures = ({ chapter, handleLecture }) => {
  return (
    <div className="p-3">
      {chapter.chapterContent.map((lecture, lectureIndex) => (
        <div key={lectureIndex} className="mb-2 flex justify-between">
          <div className="flex items-center gap-1.5">
            <p>
              {lectureIndex + 1}. {lecture.lectureTitle} -
            </p>
            <p> {lecture.lectureDuration}</p>
            <a href={lecture.lectureUrl} className="text-primaryBlue">
              link
            </a>
            <p>{lecture.isPreviewFree ? "Free Preview" : "Paid"}</p>
          </div>
          <img
            onClick={() =>
              handleLecture("remove", chapter.chapterId, lectureIndex)
            }
            src={assets.cross_icon}
            alt="cross icon"
          />
        </div>
      ))}
      <button
        onClick={() => handleLecture("add")}
        type="button"
        className="mb-2 cursor-pointer rounded bg-gray-100 p-2 text-sm"
      >
        + Add Lecture
      </button>
    </div>
  );
};

export default Lectures;
