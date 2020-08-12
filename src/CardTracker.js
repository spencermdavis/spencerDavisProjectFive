import React, { Component } from "react";
import DeleteButton from "./DeleteButton";

class CardTracker extends Component {
  render() {
    return (
      <ul>
        {this.props.apiData.map((newCardObj) => {
          return (
            <li key={newCardObj.name} className="displayCard">
              <div className="displayCardInner">
                <div className="displayCardFront">
                  <div className="imageContainer">
                    <img
                      src={newCardObj.image_uris.normal}
                      alt={newCardObj.name}
                    ></img>
                    <h2>{newCardObj.name}</h2>
                  </div>
                </div>
                <div className="displayCardBack">
                  <ul>
                    <li>cmc: {newCardObj.cmc}</li>
                    <li>mana cost: {newCardObj.mana_cost}</li>
                    <li>oracle text: {newCardObj.oracle_text}</li>
                  </ul>
                  <DeleteButton
                    thisCard={newCardObj.name}
                    cards={this.props.cards}
                    deleteCard={this.props.deleteCard}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CardTracker;
