import React from "react";
import { Header } from "./components/header";
import { Navigation, NavigationItems } from "./components/navigation";
import { Center } from "./components/center";
import { Button } from "./components/button";
import { Background } from "./components/background";
import { Welcome } from "./components/welcome";
import { ButtonBox } from "./components/buttonBox";
import { Message } from "./components/Message";

const App: React.FC = () => {
  return (
    <Background>
      <Header>
        <Navigation items={NavigationItems} />
      </Header>
      <Center>
        <Welcome>
          <Message text="Developer" />
          <ButtonBox>
            <Button text="Contact" />
            <Button text="Resume" />
          </ButtonBox>
        </Welcome>
      </Center>
    </Background>
  );
};

export default App;
