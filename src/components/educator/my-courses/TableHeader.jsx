import React from "react";
import TheadCell from "./TheadCell";

const TableHeader = () => {
  return (
    <thead className="text-left text-sm max-sm:text-center md:text-base">
      <tr className="border-b border-[#25252533]">
        <TheadCell>All Courses</TheadCell>
        <TheadCell>Earnings</TheadCell>
        <TheadCell>Students</TheadCell>
        <TheadCell>Course Status</TheadCell>
      </tr>
    </thead>
  );
};

export default TableHeader;
