import { assets } from "../../../assets/assets";
import Logo from "../../student/common/Logo";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between gap-y-4 px-6 py-7 sm:flex-row md:px-32">
      <div className="flex items-center">
        <Logo />
        <p className="text-13 text-fontGray ml-3 border-l border-[#797484] pl-3 md:ml-7 md:pl-6 md:text-base">
          All right reserved. Copyright @Edemy
        </p>
      </div>
      <div className="flex items-center gap-2">
        <FooterIcon image={assets.facebook_icon} />
        <FooterIcon image={assets.twitter_icon} />
        <FooterIcon image={assets.instagram_icon} />
      </div>
    </footer>
  );
};

export default Footer;
