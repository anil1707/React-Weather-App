import React, { useState } from "react";
import "./App.css";

import { FiSearch } from "react-icons/fi";
import WeatherInfo from "./WeatherInfo";
import ErrorMessage from "./ErrorMessage";
function App() {
  const [timeoutId, updateTimeout] = useState();
  const [data, setData] = useState({});

  async function getWeather(name) {
    if (name === "") {
      return;
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=76d4f1304fcb3419d8a1dffc595bf863`
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  }

  function inputHandler(e) {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      return getWeather(e.target.value);
    }, 500);
    updateTimeout(timeout);
  }
  return (
    <>
      <div className="weather">
        <h2 className="name">Weather App</h2>
        <div className="searchContainer">
          <FiSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Enter City Name"
            className="cityName"
            onChange={inputHandler}
            // value={name}
          />
        </div>

        {data && data.message === "city not found" ? (
          <ErrorMessage data={data} />
        ) : (
          <WeatherInfo data={data} />
        )}
      </div>
    </>
  );
}

export default App;
