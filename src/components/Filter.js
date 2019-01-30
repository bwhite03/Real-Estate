import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <section id="filter">
        <h2>Filter</h2>
        <label>Price</label>
        <input type="number" />
        <input type="number" />
        <label>Style</label>
        <select>
          <option value="ranch">Ranch</option>
          <option value="ranch">Ranch</option>
          <option value="ranch">Ranch</option>
          <option value="ranch">Ranch</option>
        </select>
        <label>Bedrooms</label>
        <select>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
        </select>
        <h4>Facilities</h4>
        <label className="facilitie-label">
          <input type="checkbox" name="elevator" value="elevator" />
          Elevator
        </label>
        <label className="facilitie-label">
          <input type="checkbox" name="fireplace" value="fireplace" />
          Fireplace
        </label>
        <label className="facilitie-label">
          <input type="checkbox" name="wifi" value="wifi" />
          Wifi
        </label>
        <label className="facilitie-label">
          <input type="checkbox" name="pool" value="pool" />
          Pool
        </label>
      </section>
    );
  }
}

export default Filter;
