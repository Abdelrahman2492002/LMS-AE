import TheadCell from "../../student/my-enrollments/TheadCell";

const StudentEnrollmentsTable = ({ data }) => {
  return (
    <div className="border-borderLight mt-5 max-w-4xl overflow-hidden rounded-md border md:mt-8">
      <table className="w-full table-fixed overflow-hidden md:table-auto">
        <thead className="text-left text-sm md:text-base">
          <tr className="border-borderLight border-b">
            <th className="hidden px-4 py-3 sm:table-cell">#</th>
            <TheadCell>Student name</TheadCell>
            <TheadCell>Course Title</TheadCell>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={`${item.student.name}${index}`}
              className="border-borderLight border-b text-xs sm:text-base text-"
            >
              <td className="hidden p-4 sm:table-cell">{index + 1}</td>
              <td className="flex items-center gap-1.5 space-x-3 px-3 py-4 md:px-4">
                <img
                  className="w-6 rounded-full sm:w-9"
                  src={item.student.imageUrl}
                  alt="student image"
                />
                <span className="truncate">{item.student.name}</span>
              </td>
              <td className="truncate">{item.courseTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentEnrollmentsTable;
