import React from "react";
import cloudy from "../assets/cloudy.svg";

export const Citycard = () => {
  return (
    <div className="citycard">
      <div className="citycard-top">
        <div className="citycard-info">
          <h1>New Delhi</h1>
          <p>Wednesday, 22 May 2026</p>
          <h1>25°C</h1>
          <p>Partly cloudy</p>
        </div>
        <img src={cloudy} className="weather-icon" />
      </div>
      <div className="citycard-stats">
        <div>
          Humidity <span>60%</span>
        </div>
        <div>
          Wind <span>12km/hr</span>
        </div>
        <div>
          Pressure <span>1006pa</span>
        </div>
        <div>
          Visibility <span>10km</span>
        </div>
        <div>
          Cloud <span>40%</span>
        </div>
      </div>
    </div>
  );
};
