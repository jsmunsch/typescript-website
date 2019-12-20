import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)
    no-repeat center center fixed;
`;

export const Background: React.FC = ({ children }) => {
  return <BackgroundImage>{children}</BackgroundImage>;
};
