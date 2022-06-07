import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "contexts";

export const Navigation = () => {
  const { theme, changeTheme } = useTheme();
  return (
    <>
      <header className="min-h-max h-[5vh] py-12 px-10 flex text-stone-800 items-center justify-between font-bold text-4xl w-full bg-violet-300 md:px-24">
        <Link to="/" className="text-5xl cursor-pointer">
          Quizify
        </Link>
        <div className=" basis-1/3 flex justify-between text-4xl md:basis-1/4 lg:basis-1/5">
          <div
            className="cursor-pointer self-center rounded-lg bg-[#fff] px-4 py-2 hover:scale-110 hover:opacity-90"
            aria-label="button"
          >
            <div onClick={changeTheme}>
              {theme === "light" ? (
                <FiSun title="Toggle Theme" />
              ) : (
                <FiMoon title="Toggle Theme" />
              )}
            </div>
          </div>
          <Link
            to="/leaderboard"
            className="cursor-pointer self-center rounded-lg bg-[#fff] px-4 py-2 hover:scale-110 hover:opacity-90"
            aria-label="button"
          >
            <span>
              <GiTrophyCup title="Leaderboard" />
            </span>
          </Link>
          <Link
            to="/profile/details"
            className="cursor-pointer self-center rounded-lg bg-[#fff] px-4 py-2 hover:scale-110 hover:opacity-90"
            aria-label="button"
          >
            <span>
              <FaUserTie title="Profile" />
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};
