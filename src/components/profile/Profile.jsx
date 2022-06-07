import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";

export const Profile = () => {
  const toggleActive = ({ isActive }) => {
    return isActive
      ? "flex gap-4 items-center cursor-pointer p-4 pb-8 pl-8 bg-violet-200 dark:bg-violet-400 dark:hover:bg-violet-400 w-[50%] justify-center"
      : "flex gap-4 items-center cursor-pointer p-4 pb-8 pl-8 dark:text-gray-300 w-[50%] justify-center";
  };

  return (
    <>
      <div className="min-h-[92vh] flex dark:bg-gray-700 flex-col">
        <nav className="w-[80%] mx-auto border border-viplet-200 my-12 p-4 rounded-lg md:w-[70%] lg:w-[60%] shadow-md">
          <div className="flex justify-center text-2xl h-max gap-8">
            <NavLink className={toggleActive} to="/profile/details">
              <span className="self-center text-4xl">
                <AiOutlineFieldTime />
              </span>
              Profile
            </NavLink>
            <NavLink className={toggleActive} to="/profile/scores">
              <span>
                <FaUserTie />
              </span>
              Recent Results
            </NavLink>
          </div>
        </nav>
        <section className="mt-16 px-4">
          <Outlet />
        </section>
      </div>
    </>
  );
};
