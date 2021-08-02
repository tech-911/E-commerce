import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
const CheckPage = () => {
  return (
    <div>
      <h1> CHECK PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/hats/:hatsId" component={CheckPage} />
        <Redirect to="/hats/:hatsId" />
      </Switch>
    </div>
  );
}

export default App;
