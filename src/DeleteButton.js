import React, { Component } from "react";

class DeleteButton extends Component {
  render() {
    return (
      <>
        {/* page returns error with empty database */}
        {/* ensure user can never fully empty database */}
        {this.props.cards.length > 1 ? (
          <button
            tabIndex="0"
            aria-label="delete card from collection"
            onClick={() => {
              this.props.deleteCard(this.props.cards[this.props.thisIndex].id);
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
  }
}

export default DeleteButton;
