import { useCategoryData } from "contexts";
import { Link } from "react-router-dom";
import { FaShare } from "react-icons/fa";
import { ToastHandler } from "utils";

export const Category = () => {
  const { categories } = useCategoryData();
  return (
    <>
      <main className="p-4 pt-16 pb-0 flex flex-col dark:bg-gray-700 min-h-[92vh] md:px-8 lg:px-16 xl:px-48">
        <h2 className="text-center text-5xl font-bold dark:text-slate-100">
          Select the Category
        </h2>
        <div className="flex flex-col items-center gap-16 my-24 mb-16 md:flex-row md:gap-8 lg:gap-16">
          {categories.map((category: any) => (
            <div
              key={category.categoryId}
              className="w-[90%] flex flex-col justify-between h-[60vh] pb-8 rounded-xl overflow-hidden shadow-[0px_0px_4px_0px_rgba(0,0,0,.3)] hover:scale-105 "
            >
              <div className="h-[60%] relative">
                <img
                  className="w-full h-full"
                  src={category.imageURL}
                  alt={category.categoryName}
                />
                <div
                  className="absolute text-black top-6 right-6 bg-gray-400 p-4 rounded-full cursor-pointer active:scale-95"
                  onClick={() => {
                    const location = window.location.href;
                    const url = location.slice(
                      0,
                      location.indexOf("categories")
                    );
                    navigator.clipboard.writeText(
                      `${url}quiz/${category.categoryId}`
                    );
                    ToastHandler("info", "Link Copied. Start sharing!");
                  }}
                >
                  <FaShare />
                </div>
              </div>
              <div className="h-[35%]">
                <p className="text-center font-bold text-2xl my-8 dark:text-gray-300">
                  {category.categoryName}
                </p>
                <Link to={`/quiz/${category.categoryId}`}>
                  <div className="bg-violet-300 w-3/5 mx-auto text-center text-3xl py-4 px-6 rounded-lg font-semibold hover:bg-violet-600 hover:text-white">
                    Start Quiz
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
