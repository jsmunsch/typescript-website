import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1522&q=80)
    no-repeat center center fixed;
`;

export const Background: React.FC = ({ children }) => {
  return <BackgroundImage>{children}</BackgroundImage>;
};
