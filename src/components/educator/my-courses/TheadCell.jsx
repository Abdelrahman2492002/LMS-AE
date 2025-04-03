const TheadCell = ({ width, children }) => {
  return (
    <th
      className={`truncate px-1.5 py-3 text-sm font-semibold md:px-4 ${width && width}`}
    >
      {children}
    </th>
  );
};

export default TheadCell;
