import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { QuizProgressStyle } from "./QuizProgress.style";

interface QuizProgressProps {
  questionIndex: number;
  totalQuestions: number;
}

const QuizProgress = ({ questionIndex, totalQuestions }: QuizProgressProps) => {
  const percentage = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <QuizProgressStyle>
      {/*  It should display how many questions are left */}
      <CircularProgressbar
        value={percentage}
        text={`${questionIndex + 1}/${totalQuestions}`}
        styles={buildStyles({
          pathColor: "#AADDF3",
          textColor: "#1C2635",
          trailColor: "#EEF7FB",
        })}
      />
    </QuizProgressStyle>
  );
};

export default QuizProgress;
