import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Button from "../../components/Button/Button";
import Question from "../../components/Quesiton/Question";
import useQuizLogic from "./Quiz.logic";
import { ButtonDiv, GreyButton, NextButton, QuizPageStyle, QuizStyle } from "./Quiz.style";
import QuizProgress from "../../components/QuizProgress/QuizProgress";

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
        <QuizProgress
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
        />
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
          {questionIndex + 1 === totalQuestions ? (
            "Discover your results"
          ) : (
            <NextButton>
              Next question
              <HiOutlineArrowLongRight />
            </NextButton>
          )}
        </Button>
      </ButtonDiv>
    </QuizPageStyle>
  );
};

export default QuizPage;
