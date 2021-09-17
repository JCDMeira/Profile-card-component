import "./App.css";
import React from "react";
import { Card } from "./components/Card";
import bottonImg from "./assets/images/bg-pattern-bottom.svg";
import topImg from "./assets/images/bg-pattern-top.svg";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <img id="top" src={topImg} alt="" />
        <img id="bottom" src={bottonImg} alt="" />
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
