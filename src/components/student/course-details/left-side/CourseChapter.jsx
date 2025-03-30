import { useContext, useState } from "react";
import { MyContext } from "../../../../context/ContextApp";
import { assets } from "../../../../assets/assets";

const CourseChapter = ({ chapter }) => {
  const { calculateChapterDuration, timeFormat, getVideoId } =
    useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-borderLight2 md:text-15 my-1 border text-xs">
      {/* chapter section */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border-borderLight2 bg-mediumWhite2 flex cursor-pointer justify-between border px-2 py-4 md:px-6"
      >
        <div className="flex gap-2 md:gap-4">
          <img
            src={assets.down_arrow_icon}
            alt="dropdown icon"
            className={`${isOpen && "rotate-180"} w-2.5 transition-all`}
          />
          <p className="text-15 font-medium md:text-base">
            {chapter.chapterTitle}
          </p>
        </div>
        <p className="flex items-center gap-1 text-xs text-nowrap md:text-sm">
          <span>{chapter.chapterContent.length} lectures</span>
          <span>-</span>
          <span>{calculateChapterDuration(chapter)}</span>
        </p>
      </div>
      {/* chapter content */}
      {chapter.chapterContent.map((lecture, index) => (
        <div
          key={index}
          className={`${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all`}
        >
          <div className="flex items-center justify-between px-3 py-4 md:px-5 md:py-3">
            <div className="flex items-center gap-2 md:gap-3">
              <img src={assets.play_icon} alt="play icon" />
              <p>{lecture.lectureTitle}</p>
            </div>
            <div className="flex items-center gap-1.5">
              {lecture.isPreviewFree && (
                <p
                  onClick={() => getVideoId(lecture.lectureUrl)}
                  className="md:text-13 text-primaryBlue cursor-pointer text-xs font-medium"
                >
                  preview
                </p>
              )}
              <p>{timeFormat(lecture.lectureDuration)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseChapter;
