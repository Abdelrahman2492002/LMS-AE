import AddLecturePopup from "./AddLecturePopup";
import LectureInput from "./LectureInput";
import uniqid from "uniqid";

const AddLectureSection = ({ state, dispatch }) => {
  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  const handleAddLecture = () => {
    const newLecture = {
      lectureId: uniqid(),
      lectureTitle: state.lectureTitle,
      lectureDuration: state.lectureDuration,
      lectureUrl: state.lectureUrl,
      isPreviewFree: state.isPreviewFree,
    };

    const updateChapter = state.chapters.map((chapter) => {
      if (chapter.chapterId === state.currentChapterId) {
        return {
          ...chapter,
          chapterContent: [...chapter.chapterContent, newLecture],
        };
      }
    });

    dispatch({ type: "setChapters", value: updateChapter });
    dispatch({ type: "closePopUp" });
    dispatch({ type: "resetLectureData" });
  };

  return (
    <div>
      <AddLecturePopup closePopUp={() => dispatch({ type: "closePopUp" })}>
        <LectureInput
          heading="Lecture Title"
          value={state.lectureTitle}
          onchange={(e) => handleChange("setLectureTitle", e.target.value)}
        />
        <LectureInput
          heading="Duration (minutes)"
          type="number"
          value={state.lectureDuration}
          onchange={(e) => handleChange("setLectureDuration", e.target.value)}
        />

        <LectureInput
          heading="Lecture URL"
          value={state.lectureUrl}
          onchange={(e) => handleChange("setLectureUrl", e.target.value)}
        />

        <div className="flex items-center gap-3">
          <label htmlFor="preview">Is Preview Free?</label>
          <input
            type="checkbox"
            className="rounded border px-2 py-1"
            value={state.isPreviewFree}
            onchange={(e) => handleChange("setIsPreviewFree", e.target.value)}
            id="preview"
          />
        </div>

        <button
          onClick={handleAddLecture}
          type="button"
          className="bg-secondBlue w-full rounded px-4 py-2 text-white"
        >
          Add
        </button>
      </AddLecturePopup>
    </div>
  );
};

export default AddLectureSection;
