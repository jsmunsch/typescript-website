import React from "react";
import styled from "styled-components";
import { fadeIn } from "../animations/fadeIn";

const StyledDiv = styled.h1`
  color: white;
  font-size: 8vw;
  margin: 20px;
  animation: ${fadeIn} 3s ease-in-out;
`;

interface Message {
  text: string;
}

export const Message: React.FC<Message> = ({ text }) => {
  return <StyledDiv>{text}</StyledDiv>;
};
