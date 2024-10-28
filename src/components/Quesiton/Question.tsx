import { QuestionProps } from "../../../static/types";
import { CenteredHeading, StyledLabel, StyledUl } from "./Question.style";

const Question = ({
  question,
  options,
  onAnswer,
  currentAnswer,
}: QuestionProps) => {
  const indexToLetter = (index: number) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[index];
  };

  return (
    <>
      <CenteredHeading>{question}</CenteredHeading>
      <StyledUl>
        {options.map((option, index) => (
          <li key={option}>
            <StyledLabel isChecked={currentAnswer === option}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={currentAnswer === option}
                onChange={() => onAnswer(option)}
              />
              {`${indexToLetter(index)}. ${option}`}
            </StyledLabel>
          </li>
        ))}
      </StyledUl>
    </>
  );
};

export default Question;
