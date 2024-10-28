import styled from "styled-components";

export const CenteredHeading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
  text-align: center;
`;

export const QuizStyle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const StyledUl = styled.ul`
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: 20px;
  margin: 20px;
`;

export const StyledLabel = styled.label<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  padding: 14px 40px 14px 20px;
  border-radius: 8px;
  border: ${({ isChecked }) =>
    isChecked ? "2px solid #5bc1ed" : "1px solid #5bc1ed"};
  cursor: pointer;
  transition: background-color 0.3s;

  background-color: ${({ isChecked }) =>
    isChecked ? "#5bc1ed" : "transparent"};
  color: ${({ isChecked }) => (isChecked ? "white" : "black")};

  input {
    display: none;
  }

  &:hover {
    background-color: rgba(91, 193, 237, 0.1);
  }

  &:focus-within {
    outline: 2px solid #5bc1ed;
  }
`;
