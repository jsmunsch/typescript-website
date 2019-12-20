import React from "react";
import { Header } from "./components/header";
import { Navigation, NavigationItems } from "./components/navigation";
import { Center } from "./components/center";
import { Button } from "./components/button";

const App: React.FC = () => {
  return (
    <div>
      <Header text="Hello">
        <Navigation items={NavigationItems} />
      </Header>
      <Center>
        <Button text="Contact" />
        <Button text="Resume" />
      </Center>
    </div>
  );
};

export default App;
