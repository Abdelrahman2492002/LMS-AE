const CoursePriceInput = ({ id, title, max, value, handleChange }) => {
  return (
    <div className="flex max-w-32 flex-col gap-2">
      <label htmlFor={id} className="text-ExtraLigthGray">
        {title}
      </label>
      <input
        type="number"
        min={0}
        {...(max && { max })}
        id={id}
        placeholder={0}
        className="border-sideBorder rounded-sm border p-2 outline-0 placeholder:text-sm"
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default CoursePriceInput;
