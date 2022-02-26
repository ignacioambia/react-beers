import React, { BaseSyntheticEvent } from "react";
import BeerInfo from "../../models/BeerInfo";
import "./BeerCard.scss";

interface BeerCardProps {
  beerInfo: BeerInfo;
}

interface BeerCardState {}

class BeerCard extends React.Component<BeerCardProps, BeerCardState> {
  state = {};

  imgNotFound = (event: BaseSyntheticEvent) => {
    event.target.style.display = "none";
  };

  render() {
    const { image, name, price } = this.props.beerInfo;
    return (
      <div className="card">
        <img src={image} onError={this.imgNotFound} alt="beer image" />
        <div>{name}</div>
        <div>
          <span className="label">Price:</span>
          <span className="price">{price}</span>
        </div>
      </div>
    );
  }
}

export default BeerCard;
