import React from "react";
import { Header } from "./components/header";
import { Navigation, NavigationItems } from "./components/navigation";
import { Center } from "./components/center";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Background } from "./components/background";

import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

const App: React.FC = () => {
  return (
    <Background>
      <Router>
        <Header>
          <Navigation items={NavigationItems} />
        </Header>
        <Center>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </Center>
      </Router>
    </Background>
  );
};

export default App;
