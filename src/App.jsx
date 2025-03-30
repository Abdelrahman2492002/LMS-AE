import { Route, Routes } from "react-router";
import Home from "./pages/student/Home";
import NavBar from "./components/student/navBar/NavBar";
import Footer from "./components/student/footer/Footer";
import CoursesList from "./pages/student/CourseList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";

const App = () => {
  return (
    <div className="font-outfit" data-theme="light">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses-list" element={<CoursesList />} />
        <Route path="/courses-list/:course" element={<CoursesList />} />
        <Route path="/course-detail/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
