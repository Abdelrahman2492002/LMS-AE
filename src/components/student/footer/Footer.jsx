import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  return (
    <footer className="font-inter bg-mediumBlack text-lightWhite">
      <div className="border-white30 mx-8 flex flex-col pt-16 pb-7 text-center font-light sm:mx-12 sm:flex-row sm:gap-24 sm:text-left md:gap-52 md:border-b md:py-11 lg:gap-32 xl:mx-36">
        <FooterBrand />
        <FooterLinks />
        <FooterSubscribe />
      </div>
      <p className="border-white30 text-white60 text-13 md:text-15 border-t py-3 text-center md:border-t-0">
        Copyright 2024 © Edemy. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
