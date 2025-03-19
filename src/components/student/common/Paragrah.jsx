const Paragrah = ({ content, color }) => {
  return (
    <p
      className={`text-13 ${color ? color : "text-fontGray"} mx-auto max-w-[334px] pt-2.5 md:max-w-[692px] md:text-base`}
    >
      {content}
    </p>
  );
};

export default Paragrah;
