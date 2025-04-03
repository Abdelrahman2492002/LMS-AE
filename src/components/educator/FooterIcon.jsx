import React from "react";

const FooterIcon = ({ directTo = "#", image }) => {
  return (
    <div>
      <a href={directTo}>
        <img src={image} alt="social_icon" className="w-7 md:w-9" />
      </a>
    </div>
  );
};

export default FooterIcon;
