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
      listings: JSON,
      filtered: []
    };
  }

  inputChangeHandler = e => {
    let keyword = e.target.value.toLowerCase().trim();
    let filtered = this.state.listings.filter(item => {
      return item.city.indexOf(keyword) > -1;
    });

    this.setState({
      filtered
    });
  };

  changeBedrooms = e => {
    let filtered = this.state.listings.filter(item => {
      return item.bedrooms.indexOf(e.target.value) > -1;
    });

    this.setState({
      filtered
    });
    console.log(this.state.bedrooms);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Filter
            globalState={this.state}
            changeBedrooms={this.changeBedrooms}
          />
          <Listing
            listings={
              this.state.filtered.length === 0
                ? this.state.listings
                : this.state.filtered
            }
            inputChangeHandler={this.inputChangeHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
