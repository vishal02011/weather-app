import React from "react";
import cloudy from "../assets/cloudy.svg";

export const Citycard = (props) => {
  const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
  console.log(props);
  return (
    <div className="citycard">
      <div className="citycard-top">
        <div className="citycard-info">
          <h1>{ props.data.city}</h1>
          <p>Wednesday, {props.data.current.time.slice(8,10)} {months[Number(props.data.current.time.slice(5,7))]} {props.data.current.time.slice(0,4)}</p>
          <h1>{props.data.current.temperature_2m}°C</h1>
          <p>Partly cloudy</p>
        </div>
        <img src={cloudy} className="weather-icon" />
      </div>
      <div className="citycard-stats">
        <div>
          Humidity <span>{props.data.current.relative_humidity_2m}%</span>
        </div>
        <div>
          Wind <span>{props.data.current.wind_speed_10m}km/hr</span>
        </div>
        <div>
          Pressure <span>{props.data.current.surface_pressure}pa</span>
        </div>
        <div>
          Visibility <span>{props.data.current.visibility/1000}km</span>
        </div>
        <div>
          Cloud <span>{props.data.current.cloud_cover}%</span>
        </div>
      </div>
    </div>
  );
};
