import React from "react";
import styled from "styled-components";

const StyledDiv = styled.h1`
  color: white;
  font-size: 4em;
  margin: 20px;
`;

interface Message {
  text: string;
}

export const Message: React.FC<Message> = ({ text }) => {
  return <StyledDiv>{text}</StyledDiv>;
};
