import React from "react";
import Emoji from "./Emoji.jsx";
import emojipedia from "../emojipedia.js";

function getEmoji(emoji) {
  return (
    <Emoji
      key={emoji.key}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(getEmoji)}</dl>
    </div>
  );
}

export default App;
