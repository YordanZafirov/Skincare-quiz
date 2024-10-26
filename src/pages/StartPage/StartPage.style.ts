import styled from "styled-components";

export const StartPageStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const StartPageBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.65);
`;

export const StartPageContent = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 600px;
  color: #fff;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 44px;
  }

  p {
    font-family: "Nunito Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    padding: 16px 0;
  }
`;
