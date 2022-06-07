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
        <main className="p-4 pt-16 flex flex-col min-h-[92vh] dark:bg-gray-700 md:p-8 md:pt-20">
          <h2 className="text-center text-4xl font-bold dark:text-slate-100">
            Rules to remember while Taking Quiz
          </h2>
          <ul className="my-12 mx-auto text-2xl md:w-[80%] lg:w-[60%]">
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
            className="bg-violet-400 w-[60%] mx-auto text-center text-3xl mb-16 py-4 gap-4 px-6 rounded-lg font-semibold hover:bg-violet-700 hover:text-white cursor-pointer md:w-[40%] lg:w-[30%]"
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
