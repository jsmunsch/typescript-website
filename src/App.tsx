import React from "react";
import "./App.css";
import { Header, NavigationItems } from "./components/header";

const App: React.FC = () => {
  return (
    <div>
      <Header text="Hello" items={NavigationItems} />
    </div>
  );
};

export default App;
