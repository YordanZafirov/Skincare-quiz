import Question from "../../components/Quesiton/Question";
import useQuizLogic from "./Quiz.logic";
import { QuizPageStyle } from "./Quiz.style";

const QuizPage = () => {

  const {
    questionIndex,
    answers,
    question,
    totalQuestions,
    handleAnswer,
    handleNext,
    handlePrev,
  } = useQuizLogic();

  return (
    <QuizPageStyle>
      <Question
        question={question.question}
        options={question.options}
        onAnswer={(answer) => handleAnswer(question.key, answer)}
        currentAnswer={answers[question.key]}
      />
      <button onClick={handlePrev} disabled={questionIndex === 0}>
        Back
      </button>
      <button onClick={handleNext}>
        {questionIndex + 1 === totalQuestions
          ? "Discover your results"
          : "Next"}
      </button>
    </QuizPageStyle>
  );
};

export default QuizPage;
