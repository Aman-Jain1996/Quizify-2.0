import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";

export const Profile = () => {
  const toggleActive = ({ isActive }) => {
    return isActive
      ? "flex gap-4 items-center cursor-pointer p-4 pb-8 pl-8 hover:bg-violet-200 bg-violet-200"
      : "flex gap-4 items-center cursor-pointer p-4 pb-8 pl-8 hover:bg-violet-200";
  };

  return (
    <>
      <div className="min-h-[80vh] flex">
        <nav className="basis-1/4 my-24 px-24 flex flex-col text-2xl">
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
