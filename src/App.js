import React, { Component } from "react";
import "normalize.css/normalize.css";
import "./App.scss";
import JSON from "./data.json";
import Header from "./components/Header/Header";
import Filter from "./components/Filter";
import Listing from "./components/Listings";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      listings: JSON
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Filter />
          <Listing listings={this.state.listings} />
        </div>
      </div>
    );
  }
}

export default App;
