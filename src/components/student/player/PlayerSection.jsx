import YouTube from "react-youtube";

const PlayerSection = ({ courseData, playerData }) => {
  return (
    <div>
      {playerData ? (
        <div>
          <YouTube
            videoId={playerData.lectureUrl.split("/").pop()}
            iframeClassName="w-full aspect-video"
          />
          <div>
            <p>
              {playerData.chapter}.{playerData.lecture}.
              {playerData.lectureTitle}
            </p>
          </div>
        </div>
      ) : (
        <img src={courseData.courseThumbnail} alt="course thumbnail" />
      )}
    </div>
  );
};

export default PlayerSection;
