import React, { Component } from "react";

class DeleteButton extends Component {
  cardCompare = (myCard) => {
    if (myCard == this.props.thisCard) {
      return (
        <button
          onClick={() => {
            this.props.deleteCard(myCard.id);
          }}
        >
          Remove Card
        </button>
      );
    }
  };
  render() {
    return (
      <>
        {this.props.cards.map((eachCard) => {
          this.cardCompare(eachCard.card);
        })}
      </>
    );
  }
}

export default DeleteButton;
