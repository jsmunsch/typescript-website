import React from "react";
import styled from "styled-components";

const HeaderBox = styled.section`
  width: 100vw;
  height: 8vh;
  display: flex;
  background: red;
  justify-content: flex-end;
  align-items: center;
`;

interface Props {
  text: string;
}

export const Header: React.FC<Props> = ({ text }) => {
  return (
    <HeaderBox>
      <ul>{text}</ul>
    </HeaderBox>
  );
};
