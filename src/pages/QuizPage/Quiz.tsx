import { QUESTION_DATA } from "../../../quiz";
import { useState } from "react";
import Question from "../../components/Quesiton/Question";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({
    hairType: "",
    washFrequency: "",
    desiredBenefit: "",
    hairIssue: "",
    hairColor: "",
  });

  const handleAnswer = (questionKey: string, answer: string) => {
    setAnswers({
      ...answers,
      [questionKey]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTION_DATA.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const isLastQuestion = currentQuestionIndex === QUESTION_DATA.length - 1;
  const hasAnsweredCurrentQuestion =
    !!answers[QUESTION_DATA[currentQuestionIndex].key];

  return (
    <div>
      <h1>Quiz</h1>
      <h2>
        Question {currentQuestionIndex + 1} of {QUESTION_DATA.length}
      </h2>
      <Question
        question={QUESTION_DATA[currentQuestionIndex].question}
        options={QUESTION_DATA[currentQuestionIndex].options}
        onAnswer={(answer) =>
          handleAnswer(QUESTION_DATA[currentQuestionIndex].key, answer)
        }
        currentAnswer={answers[QUESTION_DATA[currentQuestionIndex].key]}
      />
      <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
        Previous
      </button>

      <button
        onClick={() => {
          handleNext();
          if (isLastQuestion) {
            console.log(answers);
          }
        }}
        disabled={!hasAnsweredCurrentQuestion}
      >
        {isLastQuestion ? "Discover your results" : "Next"}
      </button>
    </div>
  );
};

export default QuizPage;
