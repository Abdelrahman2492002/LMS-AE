import CoursesView from "../../components/student/home/CoursesView";
import HeroSection from "../../components/student/home/HeroSection";

const Home = () => {
  return (
    <div className="text-center">
      <HeroSection />
      <CoursesView />
    </div>
  );
};

export default Home;
