import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="flex p-12 items-center h-[calc(89.5vh)] dark:bg-gray-700">
      <div className="mt-36 basis-2/4 p-12 flex flex-col justify-evenly">
        <p className="text-5xl font-bold max-w-[80%] m-auto leading-normal dark:text-slate-50">
          "Are you a Football Fan?"
        </p>
        <p className="my-12 mx-auto max-w-[60%] text-2xl dark:text-gray-300">
          If you are a die hard fan of football just like me, be ready to test
          your knowledge and showcase it to your friends. It will only take 5
          mins of your time to take up the quiz.
        </p>
        <Link
          to="/categories"
          className="cursor-pointer rounded-lg bg-violet-300 p-4 w-[60%] text-3xl font-bold text-center my-12 mx-auto hover:bg-violet-500 hover:text-white"
          aria-label="button"
        >
          Start Quizzing
        </Link>
      </div>
      <div className="basis-2/4 w-full h-full">
        <img
          className="w-full h-full"
          src="https://res.cloudinary.com/ajain8479/image/upload/v1653904856/Quiz%20App/quwb6vkeh5blpjs7xjov.svg"
          alt="Hero Content"
        />
      </div>
    </section>
  );
};
