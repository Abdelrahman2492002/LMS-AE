import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/ContextApp";
import { useParams } from "react-router";
import Loading from "../../components/student/common/Loading";
import ChapterPlayer from "../../components/student/player/ChapterPlayer";
import PlayerSection from "../../components/student/player/PlayerSection";
import RatingCourse from "../../components/student/player/RatingCourse";

const Player = () => {
  const { enrollmentCourses } = useContext(MyContext);
  const [courseData, setCourseData] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const { courseId } = useParams();

  const getPlayerData = (data) => {
    setPlayerData(data);
  };

  useEffect(() => {
    if (enrollmentCourses?.length) {
      const foundCourse = enrollmentCourses.find(
        (course) => course._id === courseId,
      );
      setCourseData(foundCourse || null);
    }
  }, [courseId, enrollmentCourses]);

  if (!enrollmentCourses?.length || !courseData) {
    return <Loading />;
  }

  return (
    <div className="px-3 pt-8 pb-40 sm:px-7 md:px-10 md:pt-12 lg:px-20 xl:px-40">
      <div className="flex flex-col-reverse items-center gap-y-8 sm:gap-x-5 lg:flex-row lg:gap-x-16">
        <div className="w-full flex-1 lg:max-w-[500px]">
          {courseData.courseContent.map((chapter, index) => (
            <ChapterPlayer
              key={index}
              getPlayerData={getPlayerData}
              chapter={chapter}
              index={index}
            />
          ))}
          <RatingCourse />
        </div>
        <div className="w-full lg:max-w-[424px]">
          <PlayerSection courseData={courseData} playerData={playerData} />
        </div>
      </div>
    </div>
  );
};

export default Player;
