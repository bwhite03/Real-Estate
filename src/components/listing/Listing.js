import React, { Component } from "react";
import Modal from "react-responsive-modal";
import Slider from "react-slick";
import "./listing.styles.scss";

class Listing extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="item" key={this.props.index}>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <Slider {...settings}>
            <div>
              <img src={this.props.item.slider1} alt="house" />
            </div>
            <div>
              <img src={this.props.item.slider2} alt="house" />
            </div>
            <div>
              <img src={this.props.item.slider3} alt="house" />
            </div>
          </Slider>
        </Modal>
        <img src={this.props.item.image} className="image" alt="house" />
        <div className="about">
          <div>
            <div className="price">
              <i className="fas fa-dollar-sign" />
              <span>{this.props.item.price}</span>
            </div>
            <div className="style">
              <i className="fas fa-home" />
              <span>{this.props.item.style}</span>
            </div>
          </div>
          <div>
            <div className="location">
              <i className="fas fa-map-marker-alt" />
              <span>{this.props.item.city}</span>
            </div>
            <div className="bedrooms">
              <i className="fas fa-bed" />
              <span>{this.props.item.bedrooms}</span>
            </div>
            <div className="favorite">
              <i className="far fa-heart" />
            </div>
          </div>
        </div>
        <button className="modal-button" onClick={this.onOpenModal}>
          View More
        </button>
      </div>
    );
  }
}
export default Listing;
