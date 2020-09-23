import React from "react";
import DisplayCard from "./DisplayCard";

const FilteredCardTracker = (props) => {
  return (
    <ul>
      {/* returns api data for react to append to dom */}
      {props.cards.map((newCardObj, index) => {
        return (
          <li key={index} className="displayCard" tabIndex="0">
            {newCardObj.card.mana_cost.includes(props.color) ? (
              <DisplayCard
                thisCard={newCardObj}
                cards={props.cards}
                deleteCard={props.deleteCard}
                image={newCardObj.card.image_uris.normal}
                name={newCardObj.card.name}
                mana_cost={newCardObj.card.mana_cost}
                cmc={newCardObj.card.cmc}
                oracle_text={newCardObj.card.oracle_text}
              ></DisplayCard>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default FilteredCardTracker;
