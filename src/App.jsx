import { Route, Routes } from "react-router";
import Home from "./pages/student/Home";
import NavBar from "./components/student/navBar/NavBar";
import Footer from "./components/student/footer/Footer";
import CoursesList from "./pages/student/CourseList";

const App = () => {
  return (
    <div className="font-outfit">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses-list" element={<CoursesList />} />
        <Route path="/courses-list/:course" element={<CoursesList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
