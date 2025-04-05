const AddCourseInput = ({ id, title, value, handleChange }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-ExtraLigthGray">
        {title}
      </label>
      <input
        type="text"
        id={id}
        placeholder="Type here"
        className="border-sideBorder rounded-sm border p-2 outline-0 placeholder:text-sm"
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddCourseInput;
