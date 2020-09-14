import React from "react";

const DeleteButton = (props) => {
  return (
    <button
      tabIndex="0"
      aria-label="delete card from collection"
      className="deleteButton"
      onClick={() => {
        props.deleteCard(props.thisCard.id);
      }}
    >
      Remove Card
    </button>
  );
};

export default DeleteButton;
