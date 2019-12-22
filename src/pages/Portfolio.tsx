import React from "react";
import styled from "styled-components";

const OuterBox = styled.div`
  width: 80%;
  height: 70%;
  background: transparent;
  display: flex;
  border: 1px solid white;
`;

const PortfolioImage = styled.img`
  object-fit: cover;
  object-position: center center;
  max-width: 100%;
  max-height: 100%;
`;

const ImageContainer = styled.div`
  width: 60%;
`;

const DescriptionContainer = styled.div`
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
`;

const PortfolioTitle = styled.h1`
  text-align: center;
  font-size: 2.2em;
`;

const HighlightsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

const Highlight = styled.div`
  color: white;
  background: orange;
  margin-right: 5%;
  margin-bottom: 2%;
  padding: 6px;
  font-size: 1.2em;
  height: fit-content;
  width: fit-content;
`;
export const Portfolio: React.FC = () => {
  return (
    <OuterBox>
      <ImageContainer>
        <PortfolioImage
          src={require("../ressources/mockup.png")}
          alt="boardhero"
        />
      </ImageContainer>
      <DescriptionContainer>
        <PortfolioTitle>Boardhero</PortfolioTitle>
        <h3>Highlights</h3>
        <HighlightsContainer>
          <Highlight>React</Highlight>
          <Highlight>React_Router</Highlight>
          <Highlight>React</Highlight>
          <Highlight>React_Router</Highlight>
          <Highlight>React</Highlight>
          <Highlight>React_Router</Highlight>
          <Highlight>React</Highlight>
          <Highlight>React_Router</Highlight>
          <Highlight>React</Highlight>
          <Highlight>React_Router</Highlight>
          <Highlight>React</Highlight>
          <Highlight>React_Router</Highlight>
        </HighlightsContainer>
      </DescriptionContainer>
    </OuterBox>
  );
};
