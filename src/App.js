import React, { Component } from "react";
import firebase from "./firebase";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      userInput: "",
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      // event listener for db value change

      const data = snapshot.val();

      console.log(data);

      const newCardsArray = [];

      for (let propertyName in data) {
        const newCardObj = {
          id: propertyName,
          card: data[propertyName],
        };
        newCardsArray.push(newCardObj);
      }

      console.log(newCardsArray);

      this.setState({
        cards: newCardsArray,
      });
    });
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
    });
  };

  deleteBook = (cardId) => {
    console.log(cardId);
    const dbRef = firebase.database().ref();

    dbRef.child(cardId).remove();
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>magic: the gathering collection manager</h1>

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
        </header>
        <h2>{this.state.userInput}</h2>
        <ul>
          {this.state.cards.map((newCardObj) => {
            return (
              <li key={newCardObj.id}>
                <p>{newCardObj.card}</p>
                <button
                  onClick={() => {
                    this.deleteBook(newCardObj.id);
                  }}
                >
                  Remove Card
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
