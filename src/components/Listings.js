import React from "react";

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
          <h1>no match</h1>
        ) : (
          props.listings.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img src={item.image} className="image" alt="house" />
                <div className="about">
                  <div>
                    <div className="price">
                      <i className="fas fa-dollar-sign" />
                      <span>{item.price}</span>
                    </div>
                    <div className="style">
                      <i className="fas fa-home" />
                      <span>{item.style}</span>
                    </div>
                  </div>
                  <div>
                    <div className="location">
                      <i className="fas fa-map-marker-alt" />
                      <span>{item.city}</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fas fa-bed" />
                      <span>{item.bedrooms}</span>
                    </div>
                    <div className="favorite">
                      <i className="far fa-heart" />
                    </div>
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
