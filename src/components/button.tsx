import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: purple;
  border: white;
  color: white;
`;

interface Button {
  text: string;
}
export const Button: React.FC<Button> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};
