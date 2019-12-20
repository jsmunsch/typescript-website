import React from "react";
import styled from "styled-components";

const HeaderBox = styled.section`
  width: 100vw;
  height: 8vh;
  display: flex;
  background: transparent;
  justify-content: flex-end;
  align-items: center;
`;

export const Header: React.FC = ({ children }) => {
  return <HeaderBox>{children}</HeaderBox>;
};
