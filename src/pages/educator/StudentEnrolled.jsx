import { useEffect, useState } from "react";
import TheadCell from "../../components/educator/my-courses/TheadCell";
import { dummyStudentEnrolled } from "../../assets/assets";
import Loading from "../../components/student/common/Loading";

const StudentEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  if (!enrolledStudents) {
    return <Loading />;
  }
  return (
    <div className="m-5 max-w-4xl overflow-hidden rounded-md border border-[#25252533] md:m-9">
      <table className="w-full table-fixed overflow-hidden md:table-auto">
        <thead className="text-left text-sm max-sm:text-center md:text-base">
          <tr className="border-b border-[#25252533]">
            <TheadCell width="w-7">#</TheadCell>
            <TheadCell>Student name</TheadCell>
            <TheadCell>Course Title</TheadCell>
            <TheadCell width="w-16">Date</TheadCell>
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.map((item, index) => (
            <tr
              key={`${item.name}${index}`}
              className="text-left text-xs text-gray-500 max-sm:text-center sm:text-sm"
            >
              <td className="px-1.5 py-3 md:px-4">{index + 1}</td>
              <td className="flex items-center gap-2 rounded px-1.5 py-3 md:px-4">
                <img
                  src={item.student.imageUrl}
                  alt="student image"
                  className="w-8"
                />
                <span className="truncate">{item.student.name}</span>
              </td>
              <td className="truncate px-1.5 py-3 md:px-4">
                {item.courseTitle}
              </td>
              <td className="px-1.5 py-3 md:px-4">
                {new Date(item.purchaseDate).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentEnrolled;
