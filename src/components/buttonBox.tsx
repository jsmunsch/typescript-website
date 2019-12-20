import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonBox: React.FC = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
