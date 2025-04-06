import React from "react";
import TheadCell from "./TheadCell";

const TableHeader = () => {
  return (
    <thead className="text-left text-sm max-sm:text-center md:text-base">
      <tr className="border-borderLight border-b">
        <TheadCell>All Courses</TheadCell>
        <TheadCell>Earnings</TheadCell>
        <TheadCell>Students</TheadCell>
        <TheadCell>Course Status</TheadCell>
      </tr>
    </thead>
  );
};

export default TableHeader;
