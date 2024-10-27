import Button from "../../components/Button/Button";
import Question from "../../components/Quesiton/Question";
import useQuizLogic from "./Quiz.logic";
import { ButtonDiv, GreyButton, QuizPageStyle } from "./Quiz.style";

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
      <ButtonDiv>
        <GreyButton onClick={handlePrev} disabled={questionIndex === 0}>
          Back
        </GreyButton>
        <Button onClick={handleNext}>
          {questionIndex + 1 === totalQuestions
            ? "Discover your results"
            : "Next question"}
          {/* add arrow to the right */}
        </Button>
      </ButtonDiv>
    </QuizPageStyle>
  );
};

export default QuizPage;
