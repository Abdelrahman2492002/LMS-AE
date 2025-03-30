import { useContext, useState } from "react";
import { MyContext } from "../../../context/ContextApp";
import TableRow from "./TableRow";

const TableBody = () => {
  const { enrollmentCourses } = useContext(MyContext);
  const [progressArr, setProgressArr] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 3, totalLectures: 5 },
    { lectureCompleted: 7, totalLectures: 7 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 2 },
    { lectureCompleted: 5, totalLectures: 5 },
  ]);
  return (
    <tbody>
      {enrollmentCourses.map((course, index) => (
        <TableRow
          key={course._id}
          id={course._id}
          index={index}
          course={course}
          image={course.courseThumbnail}
          title={course.courseTitle}
          progressArray={progressArr}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
