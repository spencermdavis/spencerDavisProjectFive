import React, { Component } from "react";
import DeleteButton from "./DeleteButton";

class CardTracker extends Component {
  render() {
    return (
      <ul>
        {/* returns api data for react to append to dom */}
        {this.props.cards.map((newCardObj, index) => {
          return (
            <li key={index} className="displayCard">
              <div className="displayCardInner">
                <div className="displayCardFront">
                  <div className="imageContainer">
                    <img
                      src={newCardObj.card.image_uris.normal}
                      alt={newCardObj.card.name}
                    ></img>
                    <h2>{newCardObj.card.name}</h2>
                  </div>
                </div>
                <div className="displayCardBack">
                  <ul>
                    <li>mana cost: {newCardObj.card.mana_cost}</li>
                    <li>converted mana cost: {newCardObj.cmc}</li>
                    <li>oracle text: {newCardObj.card.oracle_text}</li>
                  </ul>
                  <DeleteButton
                    tabIndex="0"
                    thisCard={newCardObj}
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
