import React from "react";

const FooterText = () => {
  return (
    <div className="wrapper">
      <p>copyright &copy; spencer davis 2020</p>
      <p>
        created @<a href="https://junocollege.com/">Juno College</a>
      </p>
      <p>
        data courtesy of the{" "}
        <a href="https://scryfall.com/docs/api/">scryfall api</a>
      </p>
    </div>
  );
};

export default FooterText;
