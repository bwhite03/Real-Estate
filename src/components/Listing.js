import React from "react";

const Listing = props => {
  return (
    <div className="item" key={props.index}>
      <img src={props.item.image} className="image" alt="house" />
      <div className="about">
        <div>
          <div className="price">
            <i className="fas fa-dollar-sign" />
            <span>{props.item.price}</span>
          </div>
          <div className="style">
            <i className="fas fa-home" />
            <span>{props.item.style}</span>
          </div>
        </div>
        <div>
          <div className="location">
            <i className="fas fa-map-marker-alt" />
            <span>{props.item.city}</span>
          </div>
          <div className="bedrooms">
            <i className="fas fa-bed" />
            <span>{props.item.bedrooms}</span>
          </div>
          <div className="favorite">
            <i className="far fa-heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
