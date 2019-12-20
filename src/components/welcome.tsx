import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 60%;
  margin-bottom: 100px;
`;

export const Welcome: React.FC = ({ children }) => {
  return <FlexBox>{children}</FlexBox>;
};
