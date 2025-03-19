import { Route, Routes } from "react-router";
import Home from "./pages/student/Home";
import NavBar from "./components/student/NavBar";
import CoursesList from "./components/student/CoursesList";

const App = () => {
  return (
    <div className="font-outfit">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses-list" element={<CoursesList />} />
      </Routes>
    </div>
  );
};

export default App;
