import FooterHeading from "../common/FooterHeading";

const FooterLinks = () => {
  return (
    <div>
      <FooterHeading heading="Company" />
      <ul className="flex items-center justify-center gap-3 pt-2 text-sm leading-8 sm:block md:pt-8">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Contact us</a>
        </li>
        <li>
          <a href="">Privacy policy</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
