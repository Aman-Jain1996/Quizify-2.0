import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="flex p-4 items-center min-h-[95vh] flex-col dark:bg-gray-700 md:flex-row md:min-h-[92vh]">
      <div className="mt-8 basis-1/2 p-4 flex flex-col justify-evenly items-center md:px-0">
        <p className="text-5xl font-bold leading-normal dark:text-slate-50 md:text-5xl text-center">
          "Are you a Football Fan?"
        </p>
        <p className="my-12 mx-auto text-center text-2xl dark:text-gray-300 md:mx-4 md:max-w-[80%]">
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
      <div className="order-first basis-1/2 w-full h-full p-24 lg:p-8 lg:px-48">
        <img
          className="w-full h-full"
          src="https://res.cloudinary.com/ajain8479/image/upload/v1653904856/Quiz%20App/quwb6vkeh5blpjs7xjov.svg"
          alt="Hero Content"
        />
      </div>
    </section>
  );
};
