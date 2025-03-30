import TheadCell from "./TheadCell";

const TableHeader = () => {
  return (
    <thead className="border-borderLight border max-sm:hidden">
      <tr>
        <TheadCell>Course</TheadCell>
        <TheadCell>Duration</TheadCell>
        <TheadCell>Completed</TheadCell>
        <TheadCell>Status</TheadCell>
      </tr>
    </thead>
  );
};

export default TableHeader;
