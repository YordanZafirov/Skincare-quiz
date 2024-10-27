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
  /* font-family: Proxima Nova; */
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
