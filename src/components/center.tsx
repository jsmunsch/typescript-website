import React from "react";
import styled from "styled-components";

const MainArea = styled.section`
  display: flex;
  height: 100vh;
  background: teal;
  justify-content: center;
  align-items: center;
`;

export const Center: React.FC = ({ children }) => {
  return <MainArea>{children}</MainArea>;
};
