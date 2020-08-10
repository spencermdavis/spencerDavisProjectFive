import React, { Component } from "react";
import firebase from "./firebase";
import "./App.scss";

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
          <div className="wrapper">
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
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#264653"
              fillOpacity="1"
              d="M0,224L0,96L288,96L288,32L576,32L576,128L864,128L864,224L1152,224L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
            ></path>
          </svg>
        </header>
        <main>
          <div className="wrapper">
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2a9d8f"
              fillOpacity="1"
              d="M0,224L0,96L288,96L288,32L576,32L576,128L864,128L864,224L1152,224L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
            ></path>
          </svg>
        </main>
        <footer>
          <div className="wrapper">
            <p>copyright spencer davis 2020</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
