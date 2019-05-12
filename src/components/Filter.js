import React from "react";

const Filter = props => {
  return (
    <section id="filter">
      <h2>Filter</h2>
      <label>Price</label>
      <select onChange={props.change} name="price">
        <option value="all" defaultValue>
          All
        </option>
        <option value="100000">100,000+</option>
        <option value="200000">200,000+</option>
        <option value="300000">300,000+</option>
        <option value="400000">400,000+</option>
      </select>
      <label>Style</label>
      <select onChange={props.change} name="style">
        <option value="all" defaultValue>
          All
        </option>
        <option value="ranch">Ranch</option>
        <option value="victorian">Victorian</option>
        <option value="rustic">Rustic</option>
      </select>
      <label>Bedrooms</label>
      <select onChange={props.change} name="bedrooms">
        <option value="all" defaultValue>
          All
        </option>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
        <option value="four">Four</option>
      </select>
      <h4>Facilities</h4>
      <label className="facilitie-label">
        <input
          onChange={props.changeFacilities}
          type="checkbox"
          name="garage"
          value="all"
        />
        All
      </label>
      <label className="facilitie-label">
        <input
          onChange={props.changeFacilities}
          type="checkbox"
          name="garage"
          value="garage"
        />
        Garage
      </label>
      <label className="facilitie-label">
        <input
          onChange={props.changeFacilities}
          type="checkbox"
          name="fireplace"
          value="fireplace"
        />
        Fireplace
      </label>
      <label className="facilitie-label">
        <input
          onChange={props.changeFacilities}
          type="checkbox"
          name="wifi"
          value="wifi"
        />
        Wifi
      </label>
      <label className="facilitie-label">
        <input
          onChange={props.changeFacilities}
          type="checkbox"
          name="pool"
          value="pool"
        />
        Pool
      </label>
      <button className="search" onClick={props.filter}>
        Search
      </button>
    </section>
  );
};

export default Filter;
