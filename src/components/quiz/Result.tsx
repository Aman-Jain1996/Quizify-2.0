import { useAuth, useQuizData } from "contexts";
import { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { GrSync } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { addScoreToDBService } from "services";

export const Result = () => {
  const { authUser } = useAuth();
  const { quizData, userAnswers } = useQuizData();
  const [resultData, setResultData] = useState(0);
  const navigate = useNavigate();
  console.log(userAnswers);

  useEffect(() => {
    if (!quizData.categoryName) navigate("/", { replace: true });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let score =
      quizData?.answers
        ?.map((correctAnswer: number, index: number) =>
          correctAnswer === userAnswers[index] ? true : false
        )
        ?.filter((a: number) => a).length * 20;
    setResultData(score);

    (async () => {
      await addScoreToDBService(authUser.uid, quizData.categoryName, score);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="mt-12 p-12 flex flex-col min-h-[70vh]">
        <div className="flex justify-center text-5xl font-bold">
          <h2 className="pb-8 border-b-4 rounded-md border-violet-600 px-4 text-center">
            Your Score : {resultData} / 100
          </h2>
        </div>

        <div className="my-12 w-3/5 py-4 px-8 mx-auto">
          <p className="text-center text-3xl pl-8 m-8 font-semibold">
            Check your answers here
          </p>

          {quizData?.quiz?.map((quiz: any, index: number) => (
            <div key={index}>
              <div className="pl-8 m-8 mt-24">
                <p className="text-3xl font-bold mt-16">
                  <span className="mr-2 text-violet-800">Q.{index + 1}</span>
                  {quiz.question}
                </p>
                {userAnswers[index] === -1 && (
                  <p className="text-red-500 text-3xl font-bold mt-8 text-right mr-16">
                    {" "}
                    Not Answered{" "}
                  </p>
                )}
              </div>

              <ul className="my-12 mx-auto">
                {quizData?.quiz[index].options.map(
                  (option: any, optionIndex: number) => {
                    if (
                      optionIndex === quizData?.answers[index] &&
                      optionIndex === userAnswers[index]
                    )
                      return (
                        <li
                          key={optionIndex}
                          className="font-semibold mx-12 my-8 h-24 bg-green-200 rounded-lg border-l-8 px-4 py-4 border-green-700"
                        >
                          <label
                            className="h-full flex items-center"
                            htmlFor={`option-${optionIndex}`}
                          >
                            <p className="text-3xl ml-8">{option}</p>
                          </label>
                        </li>
                      );
                    else if (
                      optionIndex === userAnswers[index] &&
                      optionIndex !== quizData?.answers[index]
                    )
                      return (
                        <li
                          key={optionIndex}
                          className="font-semibold mx-12 my-8 h-24 bg-red-200 rounded-lg border-l-8 px-4 py-4 border-red-700"
                        >
                          <label
                            className="h-full flex items-center"
                            htmlFor={`option-${optionIndex}`}
                          >
                            <p className="text-3xl ml-8">{option}</p>
                          </label>
                        </li>
                      );
                    else {
                      if (optionIndex === quizData?.answers[index])
                        return (
                          <li
                            key={optionIndex}
                            className="font-semibold mx-12 my-8 h-24 bg-green-200 rounded-lg border-l-8 px-4 py-4 border-green-700"
                          >
                            <label
                              className="h-full flex items-center"
                              htmlFor={`option-${optionIndex}`}
                            >
                              <p className="text-3xl ml-8">{option}</p>
                            </label>
                          </li>
                        );
                      else
                        return (
                          <li
                            key={optionIndex}
                            className="font-semibold mx-12 my-8 h-24 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700"
                          >
                            <label
                              className="h-full flex items-center"
                              htmlFor={`option-${optionIndex}`}
                            >
                              <p className="text-3xl ml-8">{option}</p>
                            </label>
                          </li>
                        );
                    }
                  }
                )}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <div className="flex justify-between my-12 w-3/5 py-4 px-8 mx-auto text-3xl font-semibold">
            <div className="w-[20%] hover:scale-110">
              <Link
                className="bg-violet-100 p-4 flex items-center justify-evenly hover:rounded-lg hover:bg-violet-300 px-8"
                to="/categories"
              >
                <span className="text-4xl">
                  <GrSync />
                </span>
                Retake
              </Link>
            </div>
            <div className="w-[20%] hover:scale-110">
              <Link
                className="bg-violet-100 p-4 flex items-center justify-evenly hover:rounded-lg hover:bg-violet-300 px-12"
                to="/"
              >
                <span className="text-4xl">
                  <GoHome />
                </span>
                Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
