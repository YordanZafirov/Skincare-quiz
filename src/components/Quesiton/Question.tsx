import { QuestionProps } from "../../../static/types";

const Question = ({
  question,
  options,
  onAnswer,
  currentAnswer,
}: QuestionProps) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={currentAnswer === option}
                onChange={() => onAnswer(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
