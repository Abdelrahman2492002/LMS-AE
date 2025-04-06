import { assets } from "../../../../assets/assets";

const AddLecturePopup = ({ children, closePopUp }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800/50"
      onClick={closePopUp}
    >
      <div
        className="text-fontGray bg-backgroundColor relative w-full max-w-80 rounded p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold">Add Lecture</h2>

        {children}
        <img
          onClick={closePopUp}
          src={assets.cross_icon}
          alt="cross icon"
          className="absolute top-4 right-4 w-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AddLecturePopup;
