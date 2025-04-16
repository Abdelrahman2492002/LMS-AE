import Footer from "../../components/student/footer/Footer";
import TableBody from "../../components/student/my-enrollments/TableBody";
import TableHeader from "../../components/student/my-enrollments/TableHeader";

const MyEnrollments = () => {
  return (
    <>
      <div className="px-3 pt-5 pb-96 sm:px-7 md:px-14 md:pt-12 lg:px-20 xl:px-40">
        <h2 className="text-fontBlack py-5 text-xl font-medium md:py-12 md:text-3xl">
          My Enrollments
        </h2>
        <table className="border-borderLight2 w-full border text-left">
          <TableHeader />
          <TableBody />
        </table>
      </div>
    </>
  );
};

export default MyEnrollments;
