import React, { Component } from "react";

class ApiAppender extends Component {
  render() {
    return (
      <ul>
        {this.props.apiData.map((eachCard) => {
          return (
            <li key={eachCard.name} className="displayCard">
              <div className="displayCardInner">
                <div className="displayCardFront">
                  <div className="imageContainer">
                    <img
                      src={this.props.apiData.image_uris.normal}
                      alt={this.props.apiData.name}
                    ></img>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ApiAppender;
