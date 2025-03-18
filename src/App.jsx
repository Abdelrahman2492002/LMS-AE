import { Route, Routes } from "react-router";
import Home from "./pages/student/Home";
import NavBar from "./components/student/NavBar";

const App = () => {
  return (
    <div className="font-outfit">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
