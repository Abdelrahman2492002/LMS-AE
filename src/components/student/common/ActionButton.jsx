import { Link } from "react-router";

const ActionButton = ({ path, children }) => {
  return (
    <Link to={path}>
      <button className="md:text-15 cursor-pointer text-xs transition-colors hover:text-black">
        {children}
      </button>
    </Link>
  );
};

export default ActionButton;
