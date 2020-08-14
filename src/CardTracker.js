import React, { Component } from "react";
import DeleteButton from "./DeleteButton";

class CardTracker extends Component {
  render() {
    return (
      <ul>
        {/* returns api data for react to append to dom */}
        {this.props.apiData.map((newCardObj, index) => {
          return (
            <li key={index} className="displayCard">
              <div className="displayCardInner">
                <div className="displayCardFront">
                  <div className="imageContainer">
                    <img
                      src={newCardObj.image_uris.normal}
                      alt={newCardObj.name}
                      tabIndex="0"
                    ></img>
                    <h2 tabIndex="0">{newCardObj.name}</h2>
                  </div>
                </div>
                <div className="displayCardBack">
                  <ul>
                    <li tabIndex="0">mana cost: {newCardObj.mana_cost}</li>
                    <li tabIndex="0">converted mana cost: {newCardObj.cmc}</li>
                    <li tabIndex="0">oracle text: {newCardObj.oracle_text}</li>
                  </ul>
                  <DeleteButton
                    thisIndex={index}
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
