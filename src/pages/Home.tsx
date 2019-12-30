import React from "react";
import { Welcome } from "../components/welcome";
import { Message } from "../components/Message";
import { ButtonBox } from "../components/buttonBox";
import { Button } from "../components/button";
import { RandomText, Skills } from "../components/randomText";

export const Home: React.FC = () => {
  return (
    <>
      <Welcome>
        <Message text="{Developer}" />
        <ButtonBox>
          <Button text="Contact" />
          <Button text="Resume" />
        </ButtonBox>
        <RandomText skills={Skills} />
      </Welcome>
    </>
  );
};
