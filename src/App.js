import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shoppage/shoppage.component";
import Error from "./pages/404/error_pages";
import Header from "./components/header/header.component";
import SignIn_signUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.components";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/404" component={Error} />
        <Route exact path="/signin" component={SignIn_signUp} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
