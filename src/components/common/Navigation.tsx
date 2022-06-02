import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FiSun } from "react-icons/fi";

export const Navigation = () => {
  return (
    <>
      <header className="min-h-max h-24 py-12 px-24 flex text-stone-800 items-center justify-between font-bold text-4xl w-full bg-violet-300">
        <Link to="/" className="text-5xl cursor-pointer">
          Quizify
        </Link>
        <div className=" basis-1/5 flex justify-evenly text-4xl">
          <div
            className="cursor-pointer self-center rounded-lg bg-[#fff] px-4 py-2 hover:scale-110 hover:opacity-90"
            aria-label="button"
          >
            <Link to="/">
              <FiSun title="Toggle Theme" />
            </Link>
          </div>
          <div
            className="cursor-pointer self-center rounded-lg bg-[#fff] px-4 py-2 hover:scale-110 hover:opacity-90"
            aria-label="button"
          >
            <Link to="/leaderboard">
              <GiTrophyCup title="Leaderboard" />
            </Link>
          </div>
          <div
            className="cursor-pointer self-center rounded-lg bg-[#fff] px-4 py-2 hover:scale-110 hover:opacity-90"
            aria-label="button"
          >
            <Link to="/login">
              <FaUserTie title="Profile" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
