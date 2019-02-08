import React from "react";

const Listings = props => {
  return (
    <section id="listings">
      <div className="listing-header">
        <input
          type="text"
          placeholder="Search"
          onChange={props.inputChangeHandler}
        />
        <div className="icons">
          <i className="fas fa-list" />
          <i className="fas fa-th" />
        </div>
      </div>
      <div className="list-items">
        {props.listings.length === 0 ? (
          <h1>no match</h1>
        ) : (
          props.listings.map(item => {
            return (
              <div className="item">
                <img src={item.image} className="image" />
                <div className="about">
                  <div className="price">
                    <i className="fas fa-dollar-sign" />
                    <span>{item.price}</span>
                  </div>
                  <div className="location">
                    <i className="fas fa-map-marker-alt" />
                    <span>{item.city}</span>
                  </div>
                  <div className="favorite">
                    <i className="far fa-heart" />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Listings;
