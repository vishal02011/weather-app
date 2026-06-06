import React from "react";
import cloudy from "../assets/cloudy.svg";
import getWeatherIcon from "./images";
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
function g(code){
  if (code === 0) return 'Clear Sky';
    if (code === 1) return 'Mainly Clear';
    if (code === 2) return 'Partly Cloudy';
    if ([3, 45, 48].includes(code)) return 'Cloudy';
    if ([51, 53, 55].includes(code)) return 'Drizzle';
    if ([ 80, 81, 82].includes(code)) return 'Showers';
    if ([61, 63, 65].includes(code)) return 'Rainy';
    if ([71, 73, 75].includes(code)) return 'Snowy';
    if ([95, 96, 99].includes(code)) return 'Thunder Storm'
}
 
  return (
    <div className="citycard">
      <div className="citycard-top">
        <div className="citycard-info">
          <h1>{ props.data.city}</h1>
          <p>Wednesday, {props.data.current.time.slice(8,10)} {months[Number(props.data.current.time.slice(5,7))]} {props.data.current.time.slice(0,4)}</p>
          <h1>{props.data.current.temperature_2m}°C</h1>
          <p>{(g(props.data.current.weather_code))}</p>
        </div>
        <img src={getWeatherIcon(props.data.current.weather_code,props.data.current.time)} className="weather-icon" />
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
