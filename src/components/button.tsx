import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid white;
  color: white;
  margin: 5px;
  padding: 1vw;
  width: 20vw;
  font-size: 1.6vw;
  outline: none;
  :hover {
    transform: scale(1.05);
  }
`;

interface Button {
  text: string;
}
export const Button: React.FC<Button> = ({ text }) => {
  return <StyledButton onClick={() => console.log(text)}>{text}</StyledButton>;
};
