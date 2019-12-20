import React from "react";
import { Header } from "./components/header";
import { Navigation, NavigationItems } from "./components/navigation";
import { Center } from "./components/center";
import { Button } from "./components/button";
import { Background } from "./components/background";

const App: React.FC = () => {
  return (
    <Background>
      <Header>
        <Navigation items={NavigationItems} />
      </Header>
      <Center>
        <Button text="Contact" />
        <Button text="Resume" />
      </Center>
    </Background>
  );
};

export default App;
