import { useQuizData } from "contexts";
import { useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import { getQuizService } from "services";
import { Question } from "./Question";

export const Rules = () => {
  const { quizId } = useParams();
  const [showRules, setShowRules] = useState(true);
  const { setQuizData } = useQuizData();

  const startQuizHandler = async () => {
    setShowRules(false);
    const response = await getQuizService(quizId);
    setQuizData(response);
  };

  return (
    <>
      {showRules ? (
        <main className="mt-12 p-12 flex flex-col min-h-[70vh]">
          <h2 className="text-center text-4xl font-bold">
            Rules to remember while Taking Quiz
          </h2>
          <ul className="my-12 w-3/4 max-w-[65%] mx-auto text-2xl">
            <li className="font-semibold mx-12 my-8 h-32 bg-violet-200 rounded-lg border-l-8 flex items-center px-8 py-4 gap-4 border-violet-700">
              <IoMdCheckboxOutline />
              <p>
                Read the questions carefully and select one option out of given
                options.
              </p>
            </li>
            <li className="font-semibold mx-12 my-8 h-32 bg-violet-200 rounded-lg border-l-8 flex items-center px-8 py-4 gap-4 border-violet-700">
              <IoMdCheckboxOutline />
              There is no negative marking for wrong answer.
            </li>
            <li className="font-semibold mx-12 my-8 h-32 bg-violet-200 rounded-lg border-l-8 flex items-center px-8 py-4 gap-4 border-violet-700">
              <IoMdCheckboxOutline />
              Time limit for the quiz is 5 minutes only.
            </li>
            <li className="font-semibold mx-12 my-8 h-32 bg-violet-200 rounded-lg border-l-8 flex items-center px-8 py-4 gap-4 border-violet-700">
              <IoMdCheckboxOutline />
              For each question you will be given 60 seconds.
            </li>
            <li className="font-semibold mx-12 my-8 h-32 bg-violet-200 rounded-lg border-l-8 flex items-center px-8 py-4 gap-4 border-violet-700">
              <IoMdCheckboxOutline />
              Participants are not allowed to use mobile during assesment.
            </li>
            <li className="font-semibold mx-12 my-8 h-32 bg-violet-200 rounded-lg border-l-8 flex items-center px-8 py-4 gap-4 border-violet-700">
              <IoMdCheckboxOutline />
              Participants are not allowed to switch to another tab while
              attempting the quiz.
            </li>
          </ul>

          <div
            className="bg-violet-400 w-1/5 mx-auto text-center text-3xl mb-16 py-4 gap-4 px-6 rounded-lg font-semibold hover:bg-violet-700 hover:text-white cursor-pointer"
            onClick={startQuizHandler}
          >
            <button>Start your Quiz Now </button>
          </div>
        </main>
      ) : (
        <Question />
      )}
    </>
  );
};
