import { useReducer } from "react";
import {
  chapterContentReducer,
  initialChaptersData,
} from "../chapterContentsReducer";
import AddLectureSection from "../lecture-popup/AddLectureSection";
import Chapters from "./Chapters";
import Lectures from "./Lectures";
import uniqid from "uniqid";

const AddChaptersAndLectures = () => {
  const [state, dispatch] = useReducer(
    chapterContentReducer,
    initialChaptersData,
  );

  const handleChapter = (action, chapterId) => {
    switch (action) {
      case "add":
        {
          const title = prompt("Enter Chapter name: ");
          if (title) {
            const newChapter = {
              chapterId: uniqid(),
              chapterTitle: title,
              chapterContent: [],
              collapsed: false,
              chapterOrder:
                state.chapters.length > 0
                  ? state.chapters.slice(-1)[0].chapterOrder + 1
                  : 1,
            };
            dispatch({
              type: "setChapters",
              value: [...state.chapters, newChapter],
            });
          }
        }
        break;
      case "remove": {
        const removeChapter = state.chapters.filter(
          (chapter) => chapter.chapterId !== chapterId,
        );
        dispatch({
          type: "setChapters",
          value: removeChapter,
        });
        break;
      }
      case "toggle": {
        const toggleCollapsed = state.chapters.map((chapter) => {
          return chapter.chapterId === chapterId
            ? { ...chapter, collapsed: !chapter.collapsed }
            : chapter;
        });
        dispatch({
          type: "setChapters",
          value: toggleCollapsed,
        });
        break;
      }
      default:
        break;
    }
  };

  const handleLecture = (action, chapterId, lectureIndex) => {
    switch (action) {
      case "add":
        {
          dispatch({ type: "setChapterId", value: chapterId });
          dispatch({ type: "showPopUp" });
        }
        break;
      case "remove": {
        const updateChapters = state.chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1);
          }
          return chapter;
        });
        dispatch({ type: "setChapters", value: updateChapters });
      }
    }
  };

  return (
    <div>
      {state.chapters.map((chapter, chapterIndex) => (
        <div
          key={chapterIndex}
          className="border-sideBorder mb-4 rounded-lg border"
        >
          <Chapters
            chapter={chapter}
            index={chapterIndex}
            handleChapter={handleChapter}
          />
          {!chapter.collapsed && (
            <Lectures chapter={chapter} handleLecture={handleLecture} />
          )}
        </div>
      ))}

      <button
        onClick={() => handleChapter("add")}
        type="button"
        className="bg-secondBlue w-full cursor-pointer rounded-sm px-4 py-2 text-white"
      >
        + Add Chapter
      </button>
      {state.popUp && <AddLectureSection state={state} dispatch={dispatch} />}
    </div>
  );
};

export default AddChaptersAndLectures;
