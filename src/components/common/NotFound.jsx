import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-[95vh] grid place-items-center dark:bg-gray-700">
      <div className="shadow-md p-16 font-bold rounded-lg dark:bg-gray-300 w-[90%] md:w-[60%] lg:w-[50%]">
        <h2 className="text-5xl text-center">
          Looks like you followed a broken link
        </h2>
        <p className="text-3xl text-center mt-16 text-red-400">
          404 Page not Found
        </p>
        <div className="flex justify-center mt-16">
          <Link
            to="/"
            className="text-2xl bg-violet-400 px-8 py-4 rounded-md hover:bg-violet-300"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};
