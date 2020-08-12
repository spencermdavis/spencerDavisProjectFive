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

  handleChange = (event) => {
    this.setState(
      {
        userInput: event.target.value,
      },
      // necessary when we need to wait for state to finish setting before updating the page
      () => {
        console.log(this.state.userInput);
      }
    );
  };

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
        <label htmlFor="newCard">Add a card to your collection</label>
        <input
          onChange={this.handleChange}
          // this is called "binding your input" and is a project 5 requirement
          value={this.state.userInput}
          type="text"
          id="newCard"
        />

        <button onClick={this.handleClick}>Add Card</button>
      </form>
    );
  }
}

export default CardInput;
