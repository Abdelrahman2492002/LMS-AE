import CoursesView from "../../components/student/home/CoursesView";
import HeroSection from "../../components/student/home/HeroSection";
import Testimonials from "../../components/student/home/Testimonials";

const Home = () => {
  return (
    <div className="text-center">
      <HeroSection />
      <CoursesView />
      <Testimonials />
    </div>
  );
};

export default Home;
