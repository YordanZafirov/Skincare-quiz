import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QUESTION_DATA } from "../../../quiz";

const useQuizLogic = () => {
  const { id } = useParams<{ id: string }>();
  const questionIndex = parseInt(id || "0", 10);
  const navigate = useNavigate();

  const question = QUESTION_DATA[questionIndex];
  const totalQuestions = QUESTION_DATA.length;

  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    const savedAnswers = localStorage.getItem("answers");
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  const handleAnswer = (questionKey: string, answer: string) => {
    const updatedAnswers = {
      ...answers,
      [questionKey]: answer,
    };
    console.log(questionKey, answer);

    setAnswers(updatedAnswers);
    localStorage.setItem("answers", JSON.stringify(updatedAnswers));
  };

  const handleNext = () => {
    if (questionIndex + 1 < totalQuestions) {
      navigate(`/quiz/${questionIndex + 1}`);
    } else {
      // navigate(`/result`, { state: { answer } });
      console.log(answers);
    }
  };

  const handlePrev = () => {
    if (questionIndex > 0) {
      navigate(`/quiz/${questionIndex - 1}`);
    }
  };

  return {
    questionIndex,
    answers,
    question,
    totalQuestions,
    handleAnswer,
    handleNext,
    handlePrev,
  };
};

export default useQuizLogic;
