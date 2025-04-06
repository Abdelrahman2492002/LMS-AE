import { Link } from "react-router";
import ActionButton from "../common/ActionButton";
import Button from "../common/Button";
import { useUser, UserButton, useClerk } from "@clerk/clerk-react";
import { assets } from "../../../assets/assets";
import Logo from "../common/Logo";
import { useTheme } from "../../../context/ThemeContext";
import ThemeIcon from "../common/ThemeIcon";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const openSign = () => openSignIn();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="border-dark-gray bg-gradient flex items-center justify-between border-b px-2 py-4 sm:px-7 md:px-14 lg:px-28 xl:px-40">
      <Logo />
      <div>
        <div className="text-fontGray md:text-15 flex items-center gap-1.5 text-sm md:gap-3">
          <ThemeIcon />
          {user ? (
            <>
              <ActionButton path="/educator">Become Educator</ActionButton>
              <span>|</span>
              <ActionButton path="/my-enrollments">My Enrollments</ActionButton>
              <UserButton />
            </>
          ) : (
            <>
              <Button onclick={openSign} rounded="rounded-full" isHidden={true}>
                Create Account
              </Button>
              <button onClick={openSign}>
                <img
                  src={assets.user_icon}
                  alt="user icon"
                  className="md:hidden"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
