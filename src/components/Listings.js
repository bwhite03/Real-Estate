import React, { Component } from "react";

class Listings extends Component {
  render() {
    return (
      <section id="listings">
        <div className="listing-header">
          <input type="text" placeholder="Search" />
          <div className="icons">
            <i class="fas fa-list" />
            <i class="fas fa-th" />
          </div>
        </div>
        <div className="list-items">
          <div className="item">
            <img src="/img/house.jpeg" className="image" />
            <div className="about">
              <div className="price">
                <i class="fas fa-dollar-sign" />
                <span>500,000</span>
              </div>
              <div className="location">
                <i class="fas fa-map-marker-alt" />
                <span>New York</span>
              </div>
              <div className="favorite">
                <i class="far fa-heart" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Listings;
