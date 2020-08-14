import React, { Component } from "react";
import firebase from "./firebase";

class CardInput extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      card: "",
    };
  }

  // binds state to user input
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  // updates database on click with user input
  handleClick = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();

    dbRef.push(this.state.userInput);

    this.setState({
      userInput: "",
      card: "",
    });
  };

  render() {
    return (
      <form action="submit">
        <label htmlFor="newCard">Add a card to your collection: </label>
        <input
          onChange={this.handleChange}
          // binding input
          value={this.state.userInput}
          type="text"
          id="newCard"
          autoComplete="off"
          placeholder="Sol Ring"
          required
          tabIndex="0"
        />
        {/* prevent user from submitting empty string */}
        {!this.state.userInput.replace(/\s/g, "").length ? (
          <button aria-label="card not yet input">Missing card input</button>
        ) : (
          <button
            aria-label="add card to collection"
            onClick={this.handleClick}
          >
            Add Card
          </button>
        )}
      </form>
    );
  }
}

export default CardInput;
