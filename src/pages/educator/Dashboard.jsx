import { useContext, useEffect, useState } from "react";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/common/Loading";
import DashboardCard from "../../components/educator/dashboard/DashboardCard";
import { MyContext } from "../../context/ContextApp";
import StudentEnrollmentsTable from "../../components/educator/dashboard/StudentEnrollmentsTable";
import MainHeading from "../../components/educator/MainHeading";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const { currency } = useContext(MyContext);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (!dashboardData) {
    return <Loading />;
  }
  return (
    <div className="p-5 md:p-9">
      <div className="mb-5 flex flex-wrap justify-center gap-4 sm:justify-start md:mb-10">
        <DashboardCard
          image={assets.patients_icon}
          number={dashboardData.enrolledStudentsData.length}
          heading="Total Enrolments"
        />
        <DashboardCard
          image={assets.appointments_icon}
          number={dashboardData.totalCourses}
          heading="Total Courses"
        />
        <DashboardCard
          image={assets.earning_icon}
          number={`${currency}${dashboardData.totalEarnings}`}
          heading={`Total Earnings`}
        />
      </div>
      <div>
        <MainHeading>Latest Enrollments</MainHeading>
        <StudentEnrollmentsTable data={dashboardData.enrolledStudentsData} />
      </div>
    </div>
  );
};

export default Dashboard;
