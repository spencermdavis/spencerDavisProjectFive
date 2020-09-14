import React, { Component } from "react";
import DisplayCard from "./DisplayCard";

class CardTracker extends Component {
  render() {
    return (
      <ul>
        {/* returns api data for react to append to dom */}
        {this.props.cards.map((newCardObj, index) => {
          return (
            <li key={index} className="displayCard" tabIndex="0">
              <DisplayCard
                thisCard={newCardObj}
                cards={this.props.cards}
                deleteCard={this.props.deleteCard}
                image={newCardObj.card.image_uris.normal}
                name={newCardObj.card.name}
                mana_cost={newCardObj.card.mana_cost}
                cmc={newCardObj.card.cmc}
                oracle_text={newCardObj.card.oracle_text}
              ></DisplayCard>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CardTracker;
