import { NavLink } from "react-router";
import { assets } from "../../assets/assets";

const SideBar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/educator", icon: assets.home_icon },
    { name: "Add Course", path: "/educator/add-course", icon: assets.add_icon },
    {
      name: "My Courses",
      path: "/educator/my-courses",
      icon: assets.my_course_icon,
    },
    {
      name: "Student Enrolled",
      path: "/educator/student-enrolled",
      icon: assets.person_tick_icon,
    },
  ];
  return (
    <aside className="border-sideBorder min-h min-h-screen max-w-3xs border-r py-2 md:w-full">
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          end
          className={({ isActive }) =>
            `my-0.5 flex gap-2.5 px-6 py-3.5 transition-colors md:px-11 ${isActive ? "bg-sideHover border-r-[6px] border-[#5F6FFF]" : "hover:bg-sideHover border-r-backgroundColor border-r-[6px]"}`
          }
        >
          <img src={item.icon} alt="icon" />
          <p className="flex-1 max-sm:hidden">{item.name}</p>
        </NavLink>
      ))}
    </aside>
  );
};

export default SideBar;
