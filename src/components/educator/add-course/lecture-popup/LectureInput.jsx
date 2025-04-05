import React from "react";

const LectureInput = ({ heading, type, value, onchange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={heading}>{heading}</label>
      <input
        type={type ? type : "text"}
        className="rounded border px-2 py-1 outline-0"
        value={value}
        onChange={onchange}
        id={heading}
        required
      />
    </div>
  );
};

export default LectureInput;
