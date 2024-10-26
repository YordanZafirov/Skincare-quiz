import {
  StartPageBackground,
  StartPageContent,
  StartPageStyle,
} from "./StartPage.style";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

const StartPage = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz");
  };
  return (
    <StartPageStyle>
      <StartPageBackground src="images/start-page-background.jpg" />
      <StartPageContent>
        <h1>Build a self care routine suitable for you</h1>
        <p>
          Take out test to get a personalised self care routine based on your
          needs.
        </p>
        <Button onClick={handleStartQuiz}>Start the quiz</Button>
      </StartPageContent>
    </StartPageStyle>
  );
};

export default StartPage;
