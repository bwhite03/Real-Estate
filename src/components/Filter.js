import React from "react";

const Filter = props => {
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
      <select
        value={props.globalState.bedrooms}
        onChange={props.changeBedrooms}
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
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
};

export default Filter;
