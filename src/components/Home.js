import React, { Component } from "react";
import "normalize.css/normalize.css";
import "../App.scss";
import JSON from "../data.json";
import Header from "./Header/Header";
import Filter from "./Filter";
import Listing from "./listings/Listings";
import Footer from "./Footer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      filtered: JSON,
      listings: JSON,
      active: false,
      price: "all",
      bedrooms: "all",
      style: "all"
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

  change = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  filter = () => {
    let newData = this.state.listings;

    if (this.state.price !== "all") {
      newData = newData.filter(item => item.price >= this.state.price);
    }

    if (this.state.style !== "all") {
      newData = newData.filter(item => item.style === this.state.style);
    }

    if (this.state.bedrooms !== "all") {
      newData = newData.filter(item => item.bedrooms === this.state.bedrooms);
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
            change={this.change}
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
