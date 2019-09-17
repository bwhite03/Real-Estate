import React from "react";
import Listing from "../listing/Listing";
import "./listings.styles.scss";

const Listings = props => {
  return (
    <section id="listings">
      <div className="listing-header">
        <input
          type="text"
          placeholder="Search City"
          onChange={props.inputChangeHandler}
        />
        <div className="icons">
          <i
            onClick={props.toggleActive}
            className={
              props.globalState.active
                ? "fas fa-list active-view"
                : "fas fa-list"
            }
          />
          <i
            onClick={props.toggleFalse}
            className={
              props.globalState.active ? "fas fa-th" : "fas fa-th active-view"
            }
          />
        </div>
      </div>
      <div
        className={
          props.globalState.active ? "list-items-active" : "list-items"
        }
      >
        {props.listings.length === 0 ? (
          <h1>No match</h1>
        ) : (
          props.listings.map((item, index) => {
            return <Listing item={item} key={index} />;
          })
        )}
      </div>
    </section>
  );
};

export default Listings;
