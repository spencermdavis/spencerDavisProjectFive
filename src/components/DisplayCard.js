import React from "react";
import DeleteButton from "./DeleteButton";

const DisplayCard = (props) => {
  return (
    <div className="displayCardInner">
      <div className="displayCardFront">
        <div className="imageContainer">
          <img src={props.image} alt={props.name}></img>
          <h2>{props.name}</h2>
        </div>
      </div>
      <div className="displayCardBack">
        <ul>
          <li>mana cost: {props.mana_cost}</li>
          <li>converted mana cost: {props.cmc}</li>
          <li>oracle text: {props.oracle_text}</li>
        </ul>
        <DeleteButton
          tabIndex="0"
          thisCard={props.thisCard}
          cards={props.cards}
          deleteCard={props.deleteCard}
        />
      </div>
    </div>
  );
};

export default DisplayCard;
