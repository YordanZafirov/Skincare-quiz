import styled from "styled-components";

export const QuizPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const GreyButton = styled.button`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.49px;
  text-align: center;
  color: #677487;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    color: #3f4d5a;
  }
`;

export const NextButton = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;