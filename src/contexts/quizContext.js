import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState({});
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <QuizContext.Provider
      value={{
        quizData,
        setQuizData,
        userAnswers,
        setUserAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizData = () => useContext(QuizContext);
