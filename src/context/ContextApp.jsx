import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { dummyCourses } from "../assets/assets";
import humanizeDuration from "humanize-duration";

export const MyContext = createContext();

const initalState = {
  coursesData: [],
  enrollmentCourses: [],
  coursesForView: [],
  playerData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COURSES_DATA": {
      return {
        ...state,
        coursesData: action.payload,
      };
    }
    case "SET_ENROLLMENT_COURSES": {
      return {
        ...state,
        enrollmentCourses: action.payload,
      };
    }
    case "SET_COURSES_FOR_VIEW": {
      return {
        ...state,
        coursesForView: action.payload.slice(0, 4),
      };
    }
    case "SET_PLAYER_DATA": {
      return {
        ...state,
        playerData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const currency = import.meta.env.VITE_CURRENCY;

  const fetchCoursesData = useCallback(async () => {
    dispatch({ type: "SET_COURSES_DATA", payload: dummyCourses });
  }, []);

  const fetchEnrollmentCourses = useCallback(async () => {
    dispatch({ type: "SET_ENROLLMENT_COURSES", payload: dummyCourses });
  }, []);

  const shortTimeFormat = useCallback((time) => {
    return humanizeDuration(time * 60 * 1000, {
      language: "shortEn",
      spacer: "",
      units: ["h", "m"],
      languages: {
        shortEn: {
          h: () => "h",
          m: () => "m",
        },
      },
    });
  }, []);

  const timeFormat = useCallback((time) => {
    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
    });
  }, []);

  const calculateRating = useCallback((rating) => {
    if (!rating.length) return 0;
    const totalRating = rating.reduce(
      (total, current) => total + current.rating,
      0,
    );

    return totalRating / rating.length;
  }, []);

  const calculateDiscount = useCallback((price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  }, []);

  const calculateCourseDurations = useCallback(
    (course) => {
      if (course.courseContent.length === 0) return 0;
      const totalTime = course.courseContent.reduce((total, chapter) => {
        return (
          total +
          chapter.chapterContent.reduce(
            (sum, lecture) => sum + lecture.lectureDuration,
            0,
          )
        );
      }, 0);
      return timeFormat(totalTime);
    },
    [timeFormat],
  );

  const calculateChapterDuration = useCallback(
    (chapter) => {
      if (!chapter.chapterContent.length) return 0;
      const chapterDuration = chapter.chapterContent.reduce(
        (total, lecture) => total + lecture.lectureDuration,
        0,
      );

      return shortTimeFormat(chapterDuration);
    },
    [shortTimeFormat],
  );

  const calculateLecturesCount = useCallback((course) => {
    let totalCount = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalCount += chapter.chapterContent.length;
      }
    });
    return totalCount;
  }, []);

  const getVideoId = useCallback((lectureUrl, index, i) => {
    dispatch({
      type: "SET_PLAYER_DATA",
      payload: {
        videoId: lectureUrl.split("/").pop(),
        chapter: index + 1,
        lecture: i + 1,
      },
    });
  }, []);

  useEffect(() => {
    fetchCoursesData();
    fetchEnrollmentCourses();
    if (state.coursesData.length) {
      dispatch({ type: "SET_COURSES_FOR_VIEW", payload: state.coursesData });
    }
  }, [state.coursesData, fetchEnrollmentCourses, fetchCoursesData]);

  const value = useMemo(() => {
    return {
      coursesData: state.coursesData,
      coursesForView: state.coursesForView,
      enrollmentCourses: state.enrollmentCourses,
      playerData: state.playerData,
      calculateRating,
      currency,
      calculateDiscount,
      calculateCourseDurations,
      calculateChapterDuration,
      calculateLecturesCount,
      shortTimeFormat,
      timeFormat,
      getVideoId,
    };
  }, [
    state.coursesData,
    state.coursesForView,
    state.enrollmentCourses,
    state.playerData,
    calculateRating,
    currency,
    calculateDiscount,
    calculateCourseDurations,
    calculateChapterDuration,
    calculateLecturesCount,
    shortTimeFormat,
    timeFormat,
    getVideoId,
  ]);
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default AppProvider;
