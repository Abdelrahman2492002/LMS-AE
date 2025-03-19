const Button = ({
  rounded,
  fontWeight,
  isHidden,
  onclick,
  width,
  children,
}) => {
  return (
    <button
      onClick={onclick}
      className={`md:text-15 ${fontWeight && fontWeight} ${width} ${isHidden && "hidden md:block"} bg-primaryBlue hover:bg-secondBlue cursor-pointer ${rounded} text-13 px-4 py-2 text-white transition-colors md:px-7 md:py-3`}
    >
      {children}
    </button>
  );
};

export default Button;
