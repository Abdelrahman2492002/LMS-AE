import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import humanizeDuration from "humanize-duration";

export const MyContext = createContext();

const AppProvider = ({ children }) => {
  const [coursesData, setCoursesData] = useState([]);
  const [enrollmentCourses, setEnrollmentCourses] = useState([]);
  const [coursesForView, setCoursesForView] = useState([]);
  const [playerData, setPlayerData] = useState(null);

  const currency = import.meta.env.VITE_CURRENCY;

  const fetchCoursesData = async () => {
    setCoursesData(dummyCourses);
  };

  const fetchEnrollmentCourses = async () => {
    setEnrollmentCourses(dummyCourses);
  };

  const shortTimeFormat = (time) => {
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
  };

  const timeFormat = (time) => {
    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
    });
  };

  const calculateRating = (rating) => {
    if (!rating.length) return 0;
    const totalRating = rating.reduce(
      (total, current) => total + current.rating,
      0,
    );

    return totalRating / rating.length;
  };

  const calculateDiscount = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  const calculateCourseDurations = (course) => {
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
  };

  const calculateChapterDuration = (chapter) => {
    if (!chapter.chapterContent.length) return 0;
    const chapterDuration = chapter.chapterContent.reduce(
      (total, lecture) => total + lecture.lectureDuration,
      0,
    );

    return shortTimeFormat(chapterDuration);
  };

  const calculateLecturesCount = (course) => {
    let totalCount = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalCount += chapter.chapterContent.length;
      }
    });
    return totalCount;
  };

  const getVideoId = (lectureUrl, index, i) => {
    setPlayerData({
      videoId: lectureUrl.split("/").pop(),
      chapter: index + 1,
      lecture: i + 1,
    });
  };

  useEffect(() => {
    fetchCoursesData();
    fetchEnrollmentCourses();
    if (coursesData.length) {
      setCoursesForView(coursesData.slice(0, 4));
    }
  }, [coursesData, enrollmentCourses]);

  const value = {
    coursesData,
    coursesForView,
    enrollmentCourses,
    calculateRating,
    currency,
    calculateDiscount,
    calculateCourseDurations,
    calculateChapterDuration,
    calculateLecturesCount,
    shortTimeFormat,
    timeFormat,
    playerData,
    getVideoId,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default AppProvider;
