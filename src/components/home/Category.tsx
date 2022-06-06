import { useCategoryData } from "contexts";
import { Link } from "react-router-dom";

export const Category = () => {
  const { categories } = useCategoryData();
  return (
    <>
      <main className="mt-12 p-12 pt-8 pb-0 flex flex-col min-h-[70vh]">
        <h2 className="text-center text-5xl font-bold">Select the Category</h2>
        <div className="flex justify-evenly my-24 mb-16">
          {categories.map((category: any) => (
            <div
              key={category.categoryId}
              className="w-1/4 flex flex-col justify-between h-[60vh] pb-8 rounded-xl overflow-hidden shadow-[0px_0px_4px_0px_rgba(0,0,0,.3)] hover:scale-105 "
            >
              <div className="h-[60%]">
                <img
                  className="w-full h-full"
                  src={category.imageURL}
                  alt={category.categoryName}
                />
              </div>
              <div className="h-[35%]">
                <p className="text-center font-bold text-3xl my-8">
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
