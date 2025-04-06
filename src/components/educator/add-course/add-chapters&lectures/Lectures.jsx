import React from "react";
import { assets } from "../../../../assets/assets";

const Lectures = ({ chapter, handleLecture }) => {
  return (
    <div className="p-3">
      {chapter.chapterContent.map((lecture, lectureIndex) => (
        <div
          key={lectureIndex}
          className="text-fontGray mb-4 flex justify-between"
        >
          <div className="flex flex-wrap items-center gap-1 md:gap-2">
            <p>
              {lectureIndex + 1}. {lecture.lectureTitle}
            </p>
            <span>-</span>
            <p> {lecture.lectureDuration} minutes</p>
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
            className="cursor-pointer"
          />
        </div>
      ))}
      <button
        onClick={() => handleLecture("add", chapter.chapterId)}
        type="button"
        className="text-fontGray bg-backgroundColor2 mb-2 cursor-pointer rounded p-2 text-sm"
      >
        + Add Lecture
      </button>
    </div>
  );
};

export default Lectures;
