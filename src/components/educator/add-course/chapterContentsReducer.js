export const initialChaptersData = {
  chapters: [],
  currentChapterId: null,
  lectureTitle: "",
  lectureDuration: "",
  lectureUrl: "",
  isPreviewFree: false,
  popUp: false,
};

export const chapterContentReducer = (state, action) => {
  switch (action.type) {
    case "setChapters":
      return {
        ...state,
        chapters: action.value,
      };
    case "setChapterId":
      return {
        ...state,
        currentChapterId: action.value,
      };
    case "setLectureTitle":
      return {
        ...state,
        lectureTitle: action.value,
      };
    case "setLectureDuration":
      return {
        ...state,
        lectureDuration: action.value,
      };
    case "setLectureUrl":
      return {
        ...state,
        lectureUrl: action.value,
      };
    case "setIsPreviewFree":
      return {
        ...state,
        isPreviewFree: action.value,
      };
    case "showPopUp":
      return {
        ...state,
        popUp: true,
      };
    case "closePopUp":
      return {
        ...state,
        popUp: false,
      };
    case "resetLectureData":
      return {
        ...state,
        lectureTitle: "",
        lectureDuration: "",
        lectureUrl: "",
        isPreviewFree: false,
      };
    default:
      return state;
  }
};
