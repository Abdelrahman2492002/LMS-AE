export const initialMainValues = {
  couresTitle: "",
  courseHeading: "",
  courseDescription: "",
  coursePrice: 0,
  courseDiscount: 0,
  image: null,
};

export const courseReducer = (state, action) => {
  switch (action.type) {
    case "setCourseTitle":
      return {
        ...state,
        couresTitle: action.value,
      };
    case "setCourseHeading":
      return {
        ...state,
        courseHeading: action.value,
      };
    case "setCourseDescription":
      return {
        ...state,
        courseDescription: action.value,
      };
    case "setCoursePrice":
      return {
        ...state,
        coursePrice: action.value,
      };
    case "setCourseDiscount":
      return {
        ...state,
        courseDiscount: action.value,
      };
    case "setImage":
      return {
        ...state,
        image: action.value,
      };
    default:
      return state;
  }
};
