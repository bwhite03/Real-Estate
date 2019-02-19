import React, { Component } from "react";
import "normalize.css/normalize.css";
import "./App.scss";
import JSON from "./data.json";
import Header from "./components/Header/Header";
import Filter from "./components/Filter";
import Listing from "./components/Listings";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      listings: JSON,
      filtered: JSON,
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

  changePrice = e => {
    if (e.target.value !== "all") {
      if (this.state.filtered.length === 0) {
        var newData = this.state.listings.filter(item => {
          return item.price >= e.target.value;
        });
      } else {
        newData = this.state.filtered.filter(item => {
          return item.price >= e.target.value;
        });
      }
    } else {
      newData = this.state.listings;
    }

    this.setState({
      filtered: newData
    });
  };

  changeBedrooms = e => {
    if (e.target.value !== "all") {
      if (this.state.filtered.length === 0) {
        var newData = this.state.listings.filter(item => {
          return item.bedrooms.indexOf(e.target.value) > -1;
        });
      } else {
        newData = this.state.filtered.filter(item => {
          return item.bedrooms.indexOf(e.target.value) > -1;
        });
      }
    } else {
      newData = this.state.listings;
    }

    this.setState({
      filtered: newData
    });
  };

  changeStyle = e => {
    if (e.target.value !== "all") {
      if (this.state.filtered.length === 0) {
        var newData = this.state.listings.filter(item => {
          return item.style.indexOf(e.target.value) > -1;
        });
      } else {
        newData = this.state.filtered.filter(item => {
          return item.style.indexOf(e.target.value) > -1;
        });
      }
    } else {
      newData = this.state.listings;
    }

    this.setState({
      filtered: newData
    });
  };

  changeFacilities = e => {
    if (this.state.filtered.length === 0) {
      var newData = this.state.listings.filter(item => {
        return (
          item.garage === e.target.value ||
          item.fireplace === e.target.value ||
          item.wifi === e.target.value ||
          item.pool === e.target.value
        );
      });
    } else {
      newData = this.state.filtered.filter(item => {
        return (
          item.garage === e.target.value ||
          item.fireplace === e.target.value ||
          item.wifi === e.target.value ||
          item.pool === e.target.value
        );
      });
    }

    this.setState({
      filtered: newData
    });
  };

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Filter
            changeBedrooms={this.changeBedrooms}
            changeStyle={this.changeStyle}
            changePrice={this.changePrice}
            changeFacilities={this.changeFacilities}
          />
          <Listing
            listings={this.state.filtered}
            inputChangeHandler={this.inputChangeHandler}
            toggleActive={this.toggleActive}
            globalState={this.state}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
