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

  changePrice = e => {
    let filtered = this.state.listings.filter(item => {
      return item.price >= e.target.value;
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
  };

  changeStyle = e => {
    let filtered = this.state.listings.filter(item => {
      return item.style.indexOf(e.target.value) > -1;
    });

    this.setState({
      filtered
    });
  };

<<<<<<< HEAD
  changeFacilities = e => {
    let filtered = this.state.listings.filter(item => {
      return (
        item.garage === e.target.value ||
        item.fireplace === e.target.value ||
        item.wifi === e.target.value ||
        item.pool === e.target.value
      );
    });

    this.setState({
      filtered
    });
  };

=======
>>>>>>> ddd3fdb95a90cdcf82d6cc8515e027966a013075
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Filter
            changeBedrooms={this.changeBedrooms}
            changeStyle={this.changeStyle}
            changePrice={this.changePrice}
<<<<<<< HEAD
            changeFacilities={this.changeFacilities}
=======
>>>>>>> ddd3fdb95a90cdcf82d6cc8515e027966a013075
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
