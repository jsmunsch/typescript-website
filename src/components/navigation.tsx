import React from "react";
import styled from "styled-components";
import { fadeInDelayed50 } from "../animations/fadeIn";
import { useHistory } from "react-router-dom";

const NavigationItem = styled.div`
  background: transparent;
  margin: 20px;
  font-size: 1.4em;
  color: white;
  padding: 15px;
  animation: ${fadeInDelayed50} 3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

export const NavigationItems = [
  { name: "home", url: "" },
  { name: "portfolio", url: "portfolio/Highlights" },
  { name: "about", url: "about" },
  { name: "resume", url: "resume" },
  { name: "contact", url: "contact" }
];

interface NavItem {
  name: string;
  url: string;
}
interface Items {
  items: Array<NavItem>;
}
export const Navigation: React.FC<Items> = ({ items }) => {
  let history = useHistory();
  return (
    <>
      {items.map(item => {
        return (
          <NavigationItem onClick={() => history.push(`/${item.url}`)}>
            {item.name}
          </NavigationItem>
        );
      })}
    </>
  );
};
