import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1522&q=80)
    no-repeat center center/150% fixed;
  @media (min-width: 2000px) {
    background: url(https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1522&q=80)
      no-repeat center center/250% fixed;
  }
`;

export const Background: React.FC = ({ children }) => {
  return <BackgroundImage>{children}</BackgroundImage>;
};
