import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="cont">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  );
}

export default App;
