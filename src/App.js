import React, { Component } from "react";
import firebase from "./firebase";
import "./styles/App.scss";
import axios from "axios";
import CardTracker from "./components/CardTracker";
import FooterText from "./components/FooterText";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      userInput: "",
      card: [],
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      // event listener for db value change

      const data = snapshot.val();

      const newCardsArray = [];

      // state setter preparation loops
      for (let propertyName in data) {
        const newCardObj = {
          id: propertyName,
          card: data[propertyName],
        };
        newCardsArray.push(newCardObj);
      }

      // state setter sets state as arrays prepared from database snapshot
      this.setState({
        cards: newCardsArray,
      });
    });
  }

  // updates database on click with user input
  handleClick = (event) => {
    event.preventDefault();

    axios({
      url: `https://api.scryfall.com/cards/named`,
      method: `GET`,
      responseType: `json`,
      params: {
        exact: `${this.state.userInput}`,
      },
    })
      .then((response) => {
        this.setState(
          {
            card: response.data,
          },
          () => {
            const dbRef = firebase.database().ref();
            dbRef.push(this.state.card);
          }
        );
      })
      .catch((error) => {
        alert("Invalid card name! Please ensure correct spelling.");
      });

    this.setState({
      userInput: "",
    });
  };

  // binds state to user input
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  // database deletion function
  deleteCard = (cardID) => {
    const dbRef = firebase.database().ref();

    dbRef.child(cardID).remove();
  };

  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <div className="inputBox">
              <h1 tabIndex="0">magic: the gathering collection manager</h1>
              <p tabIndex="0">
                type a magic:the gathering card name into the box below to add
                that card to your collection. invalid card names will not update
                your list.
              </p>
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
                  tabIndex="0"
                />
                {/* prevent user from submitting empty string */}
                {!this.state.userInput.replace(/\s/g, "").length ? null : (
                  <button
                    aria-label="add card to collection"
                    onClick={this.handleClick}
                  >
                    Add Card
                  </button>
                )}
              </form>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            aria-labelledby="title desc"
          >
            <title>dark grey square wave</title>
            <desc>
              a dark grey square wave with a flat bottom and stair-stepped top
            </desc>
            <path
              fill="#292D25"
              fillOpacity="1"
              d="M0,224L0,96L288,96L288,32L576,32L576,128L864,128L864,224L1152,224L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
            ></path>
          </svg>
        </header>
        <main>
          <div className="wrapper">
            <CardTracker
              deleteCard={this.deleteCard}
              cards={this.state.cards}
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            aria-labelledby="title desc"
          >
            <title>deep blue square wave</title>
            <desc>
              a deep blue square wave with a flat bottom and stair-stepped top.
              it matches the one above.
            </desc>
            <path
              fill="#273e47"
              fillOpacity="1"
              d="M0,224L0,96L288,96L288,32L576,32L576,128L864,128L864,224L1152,224L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
            ></path>
          </svg>
        </main>
        <footer>
          <FooterText />
        </footer>
      </div>
    );
  }
}

export default App;
