import { useContext } from "react";
import MainHeading from "../../components/educator/MainHeading";
import { MyContext } from "../../context/ContextApp";
import Loading from "../../components/student/common/Loading";
import TableHeader from "../../components/educator/my-courses/TableHeader";
import TableBody from "../../components/educator/my-courses/TableBody";

const MyCourses = () => {
  const { currency, coursesData } = useContext(MyContext);

  if (!coursesData) {
    return <Loading />;
  }

  return (
    <div className="p-5 md:p-7">
      <MainHeading>My Courses</MainHeading>
      <div className="border-borderLight mt-5 max-w-4xl overflow-hidden rounded-md border md:mt-8">
        <table className="w-full table-fixed overflow-hidden md:table-auto">
          <TableHeader />
          <TableBody coursesData={coursesData} currency={currency} />
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
