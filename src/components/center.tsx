import React from "react";
import styled from "styled-components";

const MainArea = styled.section`
  display: flex;
  height: 92vh;
  background: transparent;
  justify-content: center;
  align-items: center;
`;

export const Center: React.FC = ({ children }) => {
  return <MainArea>{children}</MainArea>;
};
