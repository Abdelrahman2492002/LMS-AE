import { assets } from "../../../assets/assets";

const FooterBrand = () => {
  return (
    <div className="mb-14 md:mb-0">
      <img src={assets.logo_dark} alt="logo icon" className="mx-auto sm:mx-0" />
      <p className="pt-6 text-sm leading-8 md:max-w-96 md:pt-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </p>
    </div>
  );
};

export default FooterBrand;
