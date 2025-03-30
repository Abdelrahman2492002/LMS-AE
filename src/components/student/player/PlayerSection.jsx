import YouTube from "react-youtube";

const PlayerSection = ({ courseData, playerData }) => {
  return (
    <div>
      {playerData ? (
        <div>
          <YouTube
            videoId={playerData.lectureUrl.split("/").pop()}
            iframeClassName="w-full h-full aspect-video"
          />
          <div className="flex items-center justify-between px-1">
            <p>
              {playerData.chapter}.{playerData.lecture}.
              {playerData.lectureTitle}
            </p>

            <button className="hover:text-primaryBlue text-fontBlue cursor-pointer text-sm font-medium transition-colors">
              {false ? "Completed" : "Mark Completed"}
            </button>
          </div>
        </div>
      ) : (
        <img src={courseData.courseThumbnail} alt="course thumbnail" />
      )}
    </div>
  );
};

export default PlayerSection;
