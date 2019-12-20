import React from "react";
import { Header } from "./components/header";
import { Navigation, NavigationItems } from "./components/navigation";
import { Center } from "./components/center";

import { Background } from "./components/background";

import { Home } from "./pages/Home";

const App: React.FC = () => {
  return (
    <Background>
      <Header>
        <Navigation items={NavigationItems} />
      </Header>
      <Center>
        <Home />
      </Center>
    </Background>
  );
};

export default App;
