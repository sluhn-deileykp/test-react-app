import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Header from "./Components/Header";
import axios from "axios";

function App() {
  const [location, setLocation] = useState(null);
  const [temp, setTemp] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  async function findTemp() {
    let url =
      "https://api.weatherapi.com/v1/current.json?key=" +
      process.env.REACT_APP_WEATHER_API +
      "&q=" +
      location +
      "&aqi=no";
    let weatherData = null;
    if (location) {
      try {
        const response = await axios.get(url);
        weatherData = response.data;
      } catch (error) {
        console.log(error);
      }
      if (weatherData) {
        setTemp(weatherData.current.temp_f);
      } else {
        setTemp("--");
      }
    }
  }

  return (
    <>
      <Header></Header>
      <div className="cont">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          className="input"
          placeholder="Enter City for Temp"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
        <button
          className="input"
          onClick={() => {
            findTemp();
          }}
        >
          Find
        </button>
        <span className="temp">{temp}°F</span>
        <span>message: {data}</span>
      </div>
    </>
  );
}

export default App;
