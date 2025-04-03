const TableBody = ({ coursesData, currency }) => {
  return (
    <tbody>
      {coursesData.map((course) => (
        <tr className="text-xs text-gray-500 max-sm:text-center sm:text-sm">
          <td className="flex items-center gap-3 rounded px-2 py-3.5 md:px-6">
            <img
              className="max-w-16 shadow-[0px_4px_15px_2px_#0000001A]"
              src={course.courseThumbnail}
              alt="course thumbnail"
            />
            <span className="flex-1 truncate">{course.courseTitle}</span>
          </td>
          <td className="px-2 py-3 md:px-4">
            {currency}
            {Math.floor(
              course.enrolledStudents.length *
                (course.coursePrice -
                  (course.discount * course.coursePrice) / 100),
            )}
          </td>
          <td className="px-2 py-3 md:px-4">
            {course.enrolledStudents.length}
          </td>
          <td className="px-2 py-3 md:px-4">
            {new Date(course.createdAt).toLocaleDateString()}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
