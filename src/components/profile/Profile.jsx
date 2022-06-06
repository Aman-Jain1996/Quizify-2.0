import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";

export const Profile = () => {
  const toggleActive = ({ isActive }) => {
    return isActive
      ? "flex gap-4 items-center cursor-pointer p-4 pb-8 pl-8 bg-violet-200 dark:bg-violet-400 dark:hover:bg-violet-400"
      : "flex gap-4 items-center cursor-pointer p-4 pb-8 pl-8 dark:text-gray-300";
  };

  return (
    <>
      <div className="min-h-[89.5vh] flex dark:bg-gray-700">
        <nav className="sticky top-24 bottom-12 basis-1/4 my-24 px-24 flex flex-col text-2xl h-max">
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
        </nav>
        <section className=" basis-3/4 px-24 mt-24">
          <Outlet />
        </section>
      </div>
    </>
  );
};
