import React, { Component } from "react";
import firebase from "./firebase";
import axios from "axios";
import CardInput from "./CardInput";
import "./App.scss";
import CardTracker from "./CardTracker";
import FooterText from "./FooterText";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      cardData: {},
      apiCards: [],
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

      const axiosArr = [];

      for (let propertyName in data) {
        const newerCardObj = {
          name: data[propertyName],
        };
        axiosArr.push(newerCardObj);
      }

      // state setter sets state as arrays prepared from database snapshot
      this.setState(
        {
          cards: newCardsArray,
          cardData: axiosArr,
        },
        // callback structure ensures api call stateful array is ready to be passed
        () => {
          axios
            .post("https://api.scryfall.com/cards/collection", {
              identifiers: this.state.cardData,
            })
            .then((response) => {
              this.setState({
                apiCards: response.data.data,
              });
            });
        }
      );
    });
  }

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
              <CardInput />
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
              apiData={this.state.apiCards}
            />
            {/* <ApiAppender apiData={this.state.apiCards} /> */}
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
