import React from "react";
import styled from "styled-components";
import { useRouteMatch, useLocation, Link } from "react-router-dom";

interface TitleProps {
  readonly isActive: boolean;
}

const StyledLink = styled(Link)<TitleProps>`
  text-decoration: none;
  color: white;
  font-size: 1.4em;
  padding: 10px;
  margin-bottom: 20px;
  border: ${props => (props.isActive ? "1px solid white" : "none")};
`;
interface Option {
  text: string;
}

export const NavLink: React.FC<Option> = ({ text }) => {
  let { url } = useRouteMatch();
  let location = useLocation();

  return (
    <StyledLink
      to={`${url}/${text}`}
      isActive={location.pathname === `${url}/${text}`}
    >
      {text}
    </StyledLink>
  );
};
