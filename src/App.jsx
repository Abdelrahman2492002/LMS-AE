import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/student/Home";
import NavBar from "./components/student/navBar/NavBar";
import Footer from "./components/student/footer/Footer";
import CoursesList from "./pages/student/CourseList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import StudentEnrolled from "./pages/educator/StudentEnrolled";
import MyCourses from "./pages/educator/MyCourses";

const App = () => {
  const location = useLocation();

  return (
    <div className="font-outfit" data-theme="light">
      {!location.pathname.includes("/educator") && <NavBar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/courses-list" element={<CoursesList />} />
        <Route path="/courses-list/:course" element={<CoursesList />} />
        <Route path="/course-detail/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/educator" element={<Educator />}>
          <Route index element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
      </Routes>
      {!location.pathname.includes("/educator") && <Footer />}
    </div>
  );
};

export default App;
