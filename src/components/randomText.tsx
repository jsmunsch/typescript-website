import React from "react";
import styled from "styled-components";

const AppearingSkills = styled.h3<CoordProps>`
  color: white;
  position: absolute;
  top: ${props => props.x_coordinates};
  left: ${props => props.y_coordinates};
`;

export const Skills = [
  { name: "HOME" },
  { name: "PORTFOLIO" },
  { name: "ABOUT" },
  { name: "RESUME" },
  { name: "CONTACT" }
];

interface CoordProps {
  x_coordinates: any;
  y_coordinates: any;
}
interface SkillItems {
  name: string;
}
interface Skills {
  skills: Array<SkillItems>;
}

const ww: number = window.innerWidth;
const wh: number = window.innerHeight;

export const RandomText: React.FC<Skills> = ({ skills }) => {
  return (
    <>
      {skills.map(skill => {
        let x: number = Math.random() * ww;
        let y: number = Math.random() * wh;

        console.log(x);
        console.log(y);
        console.log(skill.name);
        return (
          <AppearingSkills x_coordinates={x} y_coordinates={y}>
            {skill.name}
          </AppearingSkills>
        );
      })}
    </>
  );
};
