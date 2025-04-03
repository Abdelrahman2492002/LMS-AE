import { Outlet } from "react-router";
import NavBar from "../../components/educator/NavBar";
import SideBar from "../../components/educator/SideBar";
import Footer from "../../components/educator/Footer";

const Educator = () => {
  return (
    <div>
      <NavBar />
      <div className="flex pb-96">
        <SideBar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Educator;
