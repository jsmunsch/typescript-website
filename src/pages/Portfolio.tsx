import React from "react";
import OuterBox from "../components/portfolio/OuterBox";
import ImageContainer from "../components/portfolio/ImageContainer";
import PortfolioImage from "../components/portfolio/PortfolioImage";
import DescriptionContainer from "../components/portfolio/DescriptionContainer";
import PortfolioTitle from "../components/portfolio/PortfolioTitle";
import PortfolioNavigation from "../components/portfolio/PortfolioNavigation";
import HighlightsContainer from "../components/portfolio/HighlightsContainer";
import Highlight from "../components/portfolio/Highlight";

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
        <PortfolioNavigation>
          <h3>Highlights</h3>
          <h3>Description</h3>
        </PortfolioNavigation>
        <HighlightsContainer>
          <Highlight>React</Highlight>
          <Highlight>React Router</Highlight>
          <Highlight>Node.js</Highlight>
          <Highlight>Styled-Components</Highlight>
          <Highlight>PropTypes</Highlight>
          <Highlight>Storybook</Highlight>
          <Highlight>MongoDB</Highlight>
          <Highlight>Express</Highlight>
          <Highlight>Cookies</Highlight>
          <Highlight>localStorage</Highlight>
          <Highlight>npm</Highlight>
          <Highlight>Git Workflow</Highlight>
          <Highlight>JSON</Highlight>
          <Highlight>Heroku</Highlight>
          <Highlight>Adobe XD</Highlight>
          <Highlight>Boardgameatlas API</Highlight>
        </HighlightsContainer>
      </DescriptionContainer>
    </OuterBox>
  );
};
