import React, { Component } from "react";
import "normalize.css/normalize.css";
import "../App.scss";
import JSON from "../data.json";
import Header from "./Header/Header";
import Filter from "./Filter";
import Listing from "./Listings";
import Footer from "./Footer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      filtered: JSON,
      listings: JSON,
      active: false
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

  filter = e => {
    let newData;
    if (e.target.value !== "all") {
      newData = this.state.filtered.filter(item => {
        return (
          item.price >= e.target.value ||
          item.bedrooms === e.target.value ||
          item.style === e.target.value
        );
      });
    } else {
      newData = this.state.listings;
    }

    this.setState({
      filtered: newData
    });
  };

  changeFacilities = e => {
    if (e.target.value !== "all") {
      var newData = this.state.filtered.filter(item => {
        return (
          item.garage === e.target.value ||
          item.fireplace === e.target.value ||
          item.wifi === e.target.value ||
          item.pool === e.target.value
        );
      });
    } else {
      newData = this.state.listings;
    }

    this.setState({
      filtered: newData
    });
  };

  toggleActive = () => {
    this.setState({
      active: true
    });
  };

  toggleFalse = () => {
    this.setState({
      active: false
    });
  };

  render() {
    return (
      <div className="Home">
        <Header />
        <div className="wrapper">
          <Filter
            filter={this.filter}
            changeFacilities={this.changeFacilities}
          />
          <Listing
            listings={this.state.filtered}
            inputChangeHandler={this.inputChangeHandler}
            toggleActive={this.toggleActive}
            toggleFalse={this.toggleFalse}
            globalState={this.state}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
