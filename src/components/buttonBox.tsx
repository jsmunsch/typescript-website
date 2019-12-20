import React from "react";
import styled from "styled-components";
import { fadeInDelayed30 } from "../animations/fadeIn";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  animation: ${fadeInDelayed30} 3s ease-in-out;
`;

export const ButtonBox: React.FC = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
