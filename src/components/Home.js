import React, { Component } from "react";
import "normalize.css/normalize.css";
import "../App.scss";
import JSON from "../data.json";
import Filter from "./Filter";
import Listing from "./listings/Listings";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      filtered: JSON,
      listings: JSON,
      active: false,
      price: "all",
      bedrooms: "all",
      style: "all",
      garage: false,
      fireplace: false,
      wifi: false,
      pool: false
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
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
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

    if (this.state.garage !== false) {
      newData = newData.filter(item => item.garage);
    }

    if (this.state.fireplace !== false) {
      newData = newData.filter(item => item.fireplace);
    }

    if (this.state.wifi !== false) {
      newData = newData.filter(item => item.wifi);
    }

    if (this.state.pool !== false) {
      newData = newData.filter(item => item.pool);
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
        <div className="wrapper">
          <Filter filter={this.filter} change={this.change} />
          <Listing
            listings={this.state.filtered}
            inputChangeHandler={this.inputChangeHandler}
            toggleActive={this.toggleActive}
            toggleFalse={this.toggleFalse}
            globalState={this.state}
          />
        </div>
      </div>
    );
  }
}

export default Home;
