import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
