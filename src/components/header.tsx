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

const Yo = styled.li`
  color: yellow;
`;
interface Props {
  text: string;
  items: Array<object>;
}
export const NavigationItems = [
  { name: "HOME" },
  { name: "PORTFOLIO" },
  { name: "ABOUT" },
  { name: "RESUME" },
  { name: "CONTACT" }
];

export const Header: React.FC<Props> = ({ text, items }) => {
  return (
    <HeaderBox>
      <ul>
        {items.map(item =>
          // <Yo key={item.name} onclick={() => console.log(item.name)} />
          console.log(item.name)
        )}
      </ul>
    </HeaderBox>
  );
};
