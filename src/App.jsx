import { Route, Routes } from "react-router";
import Home from "./pages/student/Home";
import CoursesList from "./components/student/CoursesList";
import NavBar from "./components/student/navBar/NavBar";
import Footer from "./components/student/footer/Footer";

const App = () => {
  return (
    <div className="font-outfit">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses-list" element={<CoursesList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
