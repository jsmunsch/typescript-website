import React from "react";
import styled from "styled-components";
import { fadeInDelayed50 } from "../animations/fadeIn";

const NavigationItem = styled.div`
  background: transparent;
  margin: 20px;
  font-size: 1.4em;
  color: white;
  padding: 15px;
  animation: ${fadeInDelayed50} 3s ease-in-out;
`;

export const NavigationItems = [
  { name: "HOME" },
  { name: "PORTFOLIO" },
  { name: "ABOUT" },
  { name: "RESUME" },
  { name: "CONTACT" }
];

interface NavItem {
  name: string;
}
interface Items {
  items: Array<NavItem>;
}
export const Navigation: React.FC<Items> = ({ items }) => {
  return (
    <>
      {items.map(item => {
        return (
          <NavigationItem onClick={() => console.log(item)}>
            {item.name}
          </NavigationItem>
        );
      })}
    </>
  );
};
