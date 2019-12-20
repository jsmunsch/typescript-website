import React from "react";
import styled from "styled-components";

const NavigationItem = styled.div`
  background: transparent;
  margin: 20px;
  font-size: 1.4em;
  color: white;
  padding: 15px;
`;

export const NavigationItems = [
  { name: "HOME" },
  { name: "PORTFOLIO" },
  { name: "ABOUT" },
  { name: "RESUME" },
  { name: "CONTACT" }
];

interface Object {
  name: string;
}
interface Items {
  items: Array<Object>;
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
