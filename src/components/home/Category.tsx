import { Link } from "react-router-dom";

export const Category = () => {
  return (
    <>
      <main className="mt-12 p-12 pt-8 pb-0 flex flex-col min-h-[70vh]">
        <h2 className="text-center text-5xl font-bold">Select the Category</h2>
        <div className="flex justify-evenly my-24 mb-16">
          <div className="w-1/4 flex flex-col justify-between h-[60vh] pb-8 rounded-xl overflow-hidden shadow-[0px_0px_4px_0px_rgba(0,0,0,.3)] hover:scale-105 ">
            <div className="h-[60%]">
              <img
                className="w-full h-full"
                src="https://res.cloudinary.com/ajain8479/image/upload/v1653904856/Quiz%20App/mremzr2eijjb3ocfdirm.webp"
                alt="UEFA Champions League"
              />
            </div>
            <div className="h-[35%]">
              <p className="text-center font-bold text-3xl my-8">
                UEFA Champions League
              </p>
              <Link to="/rules">
                <div className="bg-violet-300 w-3/5 mx-auto text-center text-3xl py-4 px-6 rounded-lg font-semibold hover:bg-violet-600 hover:text-white">
                  Start Quiz
                </div>
              </Link>
            </div>
          </div>

          <div className="w-1/4 flex flex-col justify-between h-[60vh] pb-8 rounded-xl overflow-hidden shadow-[0px_0px_4px_0px_rgba(0,0,0,.3)] hover:scale-105 ">
            <div className="h-[60%]">
              <img
                className="w-full h-full"
                src="https://res.cloudinary.com/ajain8479/image/upload/v1653904855/Quiz%20App/fgvfa8hq3pcyghgdggkf.webp"
                alt="FIFA World Cup"
              />
            </div>
            <div className="h-[35%]">
              <p className="text-center font-bold text-3xl my-8">
                FIFA World Cup
              </p>
              <Link to="/rules">
                <div className="bg-violet-300 w-3/5 mx-auto text-center text-3xl py-4 px-6 rounded-lg font-semibold hover:bg-violet-600 hover:text-white">
                  Start Quiz
                </div>
              </Link>
            </div>
          </div>

          <div className="w-1/4 flex flex-col justify-between h-[60vh] pb-8 rounded-xl overflow-hidden shadow-[0px_0px_4px_0px_rgba(0,0,0,.3)] hover:scale-105 ">
            <div className="h-[60%]">
              <img
                className="w-full h-full"
                src="https://res.cloudinary.com/ajain8479/image/upload/v1653904855/Quiz%20App/psoyzmp0ygivlovmdzcj.webp"
                alt="Ligue 1"
              />
            </div>
            <div className="h-[35%]">
              <p className="text-center font-bold text-3xl my-8">Ligue 1</p>
              <Link to="/rules">
                <div className="bg-violet-300 w-3/5 mx-auto text-center text-3xl py-4 px-6 rounded-lg font-semibold hover:bg-violet-600 hover:text-white">
                  Start Quiz
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
