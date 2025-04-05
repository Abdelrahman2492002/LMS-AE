import { assets } from "../../../../assets/assets";

const UploadThumbnail = ({ image, handleChange }) => {
  return (
    <div className="flex items-center gap-1.5 pb-2 md:gap-4">
      <p className="text-ExtraLigthGray text-sm">Course Thumbnail</p>
      <label
        htmlFor="course-thumbnail"
        className="flex cursor-pointer items-center"
      >
        <img
          src={assets.file_upload_icon}
          alt="file upload icon"
          className="w-9"
        />
        <input
          type="file"
          id="course-thumbnail"
          accept="image/*"
          hidden
          onChange={handleChange}
        />
        <img
          src={image ? URL.createObjectURL(image) : ""}
          alt=""
          className="max-h-10"
        />
      </label>
    </div>
  );
};

export default UploadThumbnail;
