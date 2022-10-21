import React from "react";
import "./App.css";

import { WiHumidity } from "react-icons/wi";
import { WiCloudDown } from "react-icons/wi";
import { WiWindy } from "react-icons/wi";
import { TbSunrise } from "react-icons/tb";
import { TbSunset } from "react-icons/tb";
import daySunny from "./images/day-sunny-icon.webp";
import night from "./images/night.png";
import fewCloud from "./images/cloudy.png";
import fewCloudNigth from "./images/cloudy-night.png";
import cloud from "./images/scattered_cloud.png";
import brokenCloud from "./images/broken_cloud.png";
import showerRain from "./images/showerRain.png";
import rain from "./images/rain.png";
import thunderStrom from "./images/thunderStrom.png";
import snow from "./images/snow.png";
import mist from "./images/mist.png";
// import haze from "./images/haze.png";

function WeatherInfo({ data }) {
  let isDay;
  if (data.weather) isDay = data?.weather[0]?.icon?.includes("d");
  const weatherIcons = {
    "01d": daySunny,
    "01n": night,
    "02d": fewCloud,
    "02n": fewCloudNigth,
    "03d": cloud,
    "03n": cloud,
    "04d": brokenCloud,
    "04n": brokenCloud,
    "09d": showerRain,
    "09n": showerRain,
    "10d": rain,
    "11d": thunderStrom,
    "11n": thunderStrom,
    "12d": snow,
    "12n": snow,
    "50d": mist,
    "50n": mist,
    // "50d": haze,
    // "50n": haze,
  };
  return (
    <>
      <div className="container">
        <div className="temp">
          <div id="showTemp">
            <div>
              <span className="temperature">{data?.main?.temp}°C</span>
              <span id="desc">
                |{" "}
                {data?.weather
                  ? data?.weather[0]?.description
                  : "No Data Found"}
              </span>
            </div>
            <div id="min_max">
              <span>
                <span style={{ color: "gray" }}>Min:</span>{" "}
                {data?.main?.temp_min}°C |
              </span>
              <span>
                <span style={{ color: "gray" }}> Max:</span>{" "}
                {data?.main?.temp_max}°C{" "}
              </span>
            </div>
          </div>
          {data.weather && (
            <img
              src={weatherIcons[data.weather[0].icon]}
              alt="img"
              id="tempimg"
              style={{ color: "blue" }}
            />
          )}
        </div>
        <h2>
          {data?.name}, {data?.sys?.country}
        </h2>
        <div className="info">
          <h5>Weather Info </h5>
        </div>
        <div className="other">
          <div className="addInfo">
            {isDay ? (
              <TbSunset className="gen1" />
            ) : (
              <TbSunrise className="gen1" />
            )}
            <div className="anotherDiv">
              <span>{isDay ? "Sunset" : "Sunrise"}</span>
              <span>
                {isDay
                  ? new Date(data?.sys?.sunset * 1000).toLocaleTimeString()
                  : new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}
              </span>
            </div>
          </div>

          <div className="addInfo">
            <WiHumidity className="gen" />
            <div className="anotherDiv">
              <span>{data?.main?.humidity}</span>
              <span>Humidity</span>
            </div>
          </div>
        </div>
        <div className="other">
          <div className="addInfo">
            <WiWindy className="gen" />
            <div className="anotherDiv">
              <span>{data?.wind?.speed}</span>
              <span>Wind</span>
            </div>
          </div>
          <div className="addInfo">
            <WiCloudDown className="gen" />
            <div className="anotherDiv">
              <span>{data?.main?.pressure}</span>
              <span>Pressure</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherInfo;
