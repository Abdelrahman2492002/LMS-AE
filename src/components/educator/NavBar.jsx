import { useUser, UserButton, useClerk } from "@clerk/clerk-react";
import Logo from "../student/common/Logo";
import { assets } from "../../assets/assets";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const openSign = () => openSignIn();

  return (
    <div className="border-dark-gray flex items-center justify-between border-b px-6 pt-4 pb-3 md:pt-[18px] md:pr-9 md:pb-[22px] md:pl-11">
      <Logo />
      <div className="flex items-center gap-2">
        <p className="md:text-15 text-sm">
          Hi! {user ? user.fullName : "Developer"}
        </p>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={openSign}>
            <img
              src={assets.profile_img}
              alt="user icon"
              className="w-7 md:w-12"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
