import React from "react";
import { Header } from "./components/header";
import { Navigation, NavigationItems } from "./components/navigation";

const App: React.FC = () => {
  return (
    <div>
      <Header text="Hello">
        <Navigation items={NavigationItems} />
      </Header>
    </div>
  );
};

export default App;
