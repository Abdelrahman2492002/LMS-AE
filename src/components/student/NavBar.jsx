import { assets } from "../../assets/assets";
import ActionButton from "./common/ActionButton";
import Button from "./common/Button";
import { useUser, UserButton, useClerk, SignIn } from "@clerk/clerk-react";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const openSign = () => openSignIn();

  return (
    <div className="border-dark-gray bg-gradient flex items-center justify-between border-b px-2 py-4 sm:px-7 md:px-14 lg:px-28 xl:px-40">
      <img src={assets.logo} alt="logo icon" className="w-20 md:w-[114px]" />
      <div>
        <div className="text-fontGray md:text-15 flex items-center gap-1.5 text-sm md:gap-3">
          {user ? (
            <>
              <ActionButton>Become Educator</ActionButton>
              <span>|</span>
              <ActionButton>My Enrollments</ActionButton>
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
