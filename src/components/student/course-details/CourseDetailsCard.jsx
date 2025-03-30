const CourseDetailsCard = ({ children }) => {
  return (
    <div className="max-w-[424px] min-w-[300px] self-center shadow-[0px_4px_15px_2px_#0000001A] md:self-start lg:min-w-96">
      {children}
    </div>
  );
};

export default CourseDetailsCard;
