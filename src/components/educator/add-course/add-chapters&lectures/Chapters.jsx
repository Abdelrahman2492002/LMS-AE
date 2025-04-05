import React from "react";
import { assets } from "../../../../assets/assets";

const Chapters = ({ index, chapter, handleChapter }) => {
  console.log(chapter.collapsed);
  return (
    <div className="border-sideBorder flex items-center justify-between border-b px-4 py-3 text-sm">
      <div className="flex items-center gap-2.5">
        <img
          src={assets.dropdown_icon}
          alt="down_arrow_icon"
          className={`w-3.5 cursor-pointer transition-all ${chapter.collapsed && "-rotate-90"}`}
          onClick={() => handleChapter("toggle", chapter.chapterId)}
        />
        <p className="font-semibold">
          {index + 1} {chapter.chapterTitle}
        </p>
      </div>
      <p className="text-ExtraLigthGray font-semibold">
        {chapter.chapterContent.length} lectures
      </p>
      <img
        src={assets.cross_icon}
        alt="cross icon"
        className="cursor-pointer"
        onClick={() => handleChapter("remove", chapter.chapterId)}
      />
    </div>
  );
};

export default Chapters;
