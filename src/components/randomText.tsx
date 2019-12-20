import React from "react";
import styled from "styled-components";

const AppearingSkills = styled.h3`
  color: white;
  position: absolute;
`;

export const Skills = [
  { name: "HOME" },
  { name: "PORTFOLIO" },
  { name: "ABOUT" },
  { name: "RESUME" },
  { name: "CONTACT" }
];
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
      {skills.forEach(skill => {
        let x: number = Math.random() * ww;
        let y: number = Math.random() * wh;
        console.log(x);
        console.log(y);
        return <AppearingSkills>{skill.name}</AppearingSkills>;
      })}
    </>
  );
};
