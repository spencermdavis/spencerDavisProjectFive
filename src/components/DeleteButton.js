import React from "react";

const DeleteButton = (props) => {
  return (
    <>
      {/* ensure user can never fully empty database */}
      {props.cards.length > 1 ? (
        <button
          tabIndex="0"
          aria-label="delete card from collection"
          onClick={() => {
            props.deleteCard(props.thisCard.id);
          }}
        >
          Remove Card
        </button>
      ) : (
        <button
          tabIndex="0"
          aria-label="cannot delete card collection must always have at least one card"
        >
          Cannot delete card
        </button>
      )}
    </>
  );
};

export default DeleteButton;
