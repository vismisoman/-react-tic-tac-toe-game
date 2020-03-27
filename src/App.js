import React from "react";
import logo from "./logo.svg";
import gameimg from "./gameimg.jpg";
import "./App.css";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {" "}
          <img
            src={gameimg}
            style={{ width: "200px", height: "100px" }}
            className="gameimg"
            alt="gameimg"
          />
        </div>
        <Game />
      </header>
    </div>
  );
}

export default App;
