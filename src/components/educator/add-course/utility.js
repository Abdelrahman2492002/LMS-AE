export const checkValidity = (lectureTitle, lectureDuration, lectureUrl) => {
  if (!lectureTitle) {
    alert("Lecture Title is required");
    return false;
  }

  if (!lectureDuration || lectureDuration <= 0) {
    alert("Lecture Duration must be a positive number");
    return false;
  }

  if (!lectureUrl) {
    alert("Lecture URL is required and must be a valid URL");
    return false;
  }

  return true;
};
