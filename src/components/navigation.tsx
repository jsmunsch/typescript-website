import React from "react";
import styled from "styled-components";

const NavigationItem = styled.div`
  background: transparent;
  margin: 20px;
  font-size: 20px;
  color: white;
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
      {items.map<any>(item => {
        return (
          <NavigationItem onClick={() => console.log(item)}>
            {item.name}
          </NavigationItem>
        );
      })}
    </>
  );
};
