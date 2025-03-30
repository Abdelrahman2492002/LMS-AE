import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/ContextApp";
import Loading from "../../components/student/common/Loading";
import CourseInfo from "../../components/student/course-details/left-side/CourseInfo";
import CourseStructure from "../../components/student/course-details/left-side/CourseStructure";
import CourseDescription from "../../components/student/course-details/left-side/CourseDescription";
import CourseDetailsCard from "../../components/student/course-details/CourseDetailsCard";
import CoursePricing from "../../components/student/course-details/CoursePricing";
import CourseMetaInfo from "../../components/student/course-details/CourseMetaInfo";
import CourseBenefits from "../../components/student/course-details/CourseBenefits";
import Button from "../../components/student/common/Button";

const CourseDetails = () => {
  const { coursesData } = useContext(MyContext);
  const [courseDetails, setCourseDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (coursesData.length > 0) {
      const foundCourse = coursesData.find((course) => course._id === id);
      setCourseDetails(foundCourse);
    }
  }, [coursesData, id]);

  if (!courseDetails) {
    return <Loading />;
  }

  return (
    <div className="bg-gradient-to-b from-[#E6FFFF] to-white px-3 pt-8 pb-96 sm:px-7 md:px-10 md:pt-20 lg:px-20 xl:px-40">
      <div className="flex flex-col-reverse items-start gap-y-12 sm:gap-x-5 md:flex-row lg:gap-x-16">
        <div className="max-w-[653px]">
          <CourseInfo details={courseDetails} />
          <CourseStructure details={courseDetails} />
          <CourseDescription details={courseDetails} />
        </div>
        <CourseDetailsCard>
          <CoursePricing details={courseDetails} />
          <CourseMetaInfo details={courseDetails} />
          <div className="px-6">
            <Button width="w-full" rounded="rounded-5">
              Enroll Now
            </Button>
          </div>
          <CourseBenefits details={courseDetails} />
        </CourseDetailsCard>
      </div>
    </div>
  );
};

export default CourseDetails;
