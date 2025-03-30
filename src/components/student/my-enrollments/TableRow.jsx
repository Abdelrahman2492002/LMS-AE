import { useContext } from "react";
import { MyContext } from "../../../context/ContextApp";
import { Line } from "rc-progress";
import { useNavigate } from "react-router";

const TableRow = ({ id, index, course, image, title, progressArray }) => {
  const { calculateCourseDurations } = useContext(MyContext);
  const navigate = useNavigate();
  const isComplete = progressArray[index]
    ? progressArray[index].lectureCompleted ===
      progressArray[index].totalLectures
    : 0;

  const completePercent = progressArray[index]
    ? (progressArray[index].lectureCompleted * 100) /
      progressArray[index].totalLectures
    : 0;
  return (
    <tr className="border-borderLight text-fontGray border-b">
      <td className="flex items-center space-x-3 px-2 py-3">
        <img
          src={image}
          alt="course thumbnail"
          className="w-14 rounded-xs sm:w-24 md:w-28"
        />
        <div className="flex-1">
          <p className="py-2 max-sm:text-sm">{title}</p>
          <Line
            strokeWidth={2}
            className="bg-white60"
            percent={completePercent}
            strokeColor={`${completePercent === 100 ? "var(--color-midGreen)" : "var(--color-primaryBlue)"}`}
          />
        </div>
      </td>
      <td className="px-2 py-3 max-sm:hidden">
        {calculateCourseDurations(course)}
      </td>
      <td className="px-2 py-3 max-sm:hidden">
        {progressArray[index] &&
          progressArray[index].lectureCompleted +
            " / " +
            progressArray[index].totalLectures}
        <span> lectures</span>
      </td>
      <td className="px-2 py-3 max-sm:text-right">
        <button
          onClick={() => {
            navigate(`/player/${id}`);
            scrollTo(0, 0);
          }}
          className={`${isComplete ? "bg-midGreen" : "bg-primaryBlue"} max-sm:text-13 sm:py- min-w-20 cursor-pointer rounded px-2 py-1 text-center text-white sm:px-5`}
        >
          {isComplete ? "Completed" : "On Going"}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
