const ActionButton = ({ children }) => {
  return (
    <button className="md:text-15 cursor-pointer text-xs transition-colors hover:text-black">
      {children}
    </button>
  );
};

export default ActionButton;
