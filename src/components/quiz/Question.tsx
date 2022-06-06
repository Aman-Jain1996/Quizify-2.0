import { useEffect, useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineExport } from "react-icons/ai";
import { RiTimerLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useQuizData } from "contexts";
import { Loader } from "components/common/Loader";

export const Question = () => {
  const { quizData, userAnswers, setUserAnswers } = useQuizData();
  const [answer, setAnswer] = useState(-1);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const navigate = useNavigate();
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const timerId = setInterval(() => setTimer((timer) => timer - 1), 1000);
    return () => clearInterval(timerId);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (timer === 0) nextClickHandler();
    // eslint-disable-next-line
  }, [timer]);

  const nextClickHandler = () => {
    if (userAnswers.length >= 5) setUserAnswers([]);
    setUserAnswers((ans: any) => ans.concat(answer));
    setAnswer(-1);
    if (activeQuestion === 5) {
      navigate("/results", { replace: true });
    } else {
      setActiveQuestion((q: number) => q + 1);
      setTimer(60);
    }
  };

  const quitClickHandler = () => {
    navigate("/", { replace: true });
    setUserAnswers([]);
  };

  const optionHandler = (e: any) => {
    const selectedAnswer = e.target.id.split("-")[1];
    setAnswer(Number(selectedAnswer));
  };

  return !quizData.categoryName ? (
    <Loader />
  ) : (
    <>
      <main className="mt-12 p-12 flex flex-col min-h-[70vh]">
        <div className="flex justify-center text-4xl font-bold">
          <h2 className="pb-8 border-b-4 rounded-md border-violet-600 w-max px-8 text-center">
            {quizData.categoryName}
          </h2>
        </div>
        <form>
          <div className="my-12 w-3/5 py-4 px-8 mx-auto shadow-[0px_0px_5px_0px_rgba(0,0,0,.2)] rounded-xl">
            <div className="flex justify-between">
              <p className=" flex items-center text-2xl pl-8 m-8 font-semibold">
                Question :
                <span className="font-bold ml-2 text-2xl text-violet-800">
                  {activeQuestion + " / " + quizData?.quiz.length}
                </span>
              </p>
              <p className="flex items-center text-2xl pl-8 m-8 font-semibold">
                <span className="text-4xl">
                  <RiTimerLine />
                </span>
                <span className="font-bold ml-2 text-3xl text-violet-800">
                  {timer}s
                </span>
              </p>
            </div>
            <div className="pl-8 m-8">
              <p className="text-[20px] font-bold mt-16">
                <span className="mr-2 text-violet-800">Q.{activeQuestion}</span>
                {quizData.quiz[activeQuestion - 1].question}
              </p>
            </div>

            <div className="my-12 mx-auto">
              {quizData.quiz[activeQuestion - 1].options.map(
                (option: string, index: number) => (
                  <div
                    key={index}
                    className={`font-semibold mx-12 my-8 h-20 bg-violet-200 rounded-lg border-l-8 px-4 py-4 border-violet-700 hover:bg-violet-400 ${
                      answer === index && "bg-violet-400"
                    }`}
                  >
                    <label
                      className="ml-8 h-full flex items-center"
                      htmlFor={`option-${index}`}
                    >
                      <input
                        className="w-10 h-10 mr-8 checked:bg-violet-400"
                        id={`option-${index}`}
                        type="radio"
                        name="option"
                        checked={answer === index}
                        onChange={(e) => optionHandler(e)}
                      />
                      <p className="text-2xl">{option}</p>
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <div className="flex justify-between my-12 w-3/5 py-4 px-8 mx-auto text-3xl font-semibold">
              <div className="w-[20%] hover:scale-110">
                <button
                  className="bg-violet-100 p-4 flex items-center justify-evenly hover:rounded-lg hover:bg-violet-300 px-12"
                  onClick={quitClickHandler}
                >
                  Quit
                  <span className="text-4xl">
                    <AiOutlineExport />
                  </span>
                </button>
              </div>
              <div className="w-[20%] hover:scale-110">
                <button
                  className="bg-violet-100 p-4 flex items-center justify-evenly hover:rounded-lg hover:bg-violet-300 px-12"
                  onClick={nextClickHandler}
                  type="reset"
                >
                  {activeQuestion === 5 ? "Submit" : "Next"}
                  <span className="text-4xl">
                    <GrFormNext />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};
