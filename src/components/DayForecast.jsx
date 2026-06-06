import React from 'react'
import cloudy from "../assets/cloudy.svg";
import getWeatherIcon from "./images";
export const DayForecast = ({data}) => {
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
  const tempmin=data?.daily?.temperature_2m_min
  return (
    <div className='day'>
      <h3>5-Day Forecast</h3>
      <div>
        {data.daily.time.map((day,index)=>(<div key={index} className='weather-day'>
          <h4>{months[Number(data.daily.time[index].slice(5,7))]} {Number(data.daily.time[index].slice(8,10))}</h4>
          <img src={getWeatherIcon(data.daily.weather_code[index],data.daily.time)} alt="Cloudy" />
          <p>{data.daily.temperature_2m_max[index]}°C / {tempmin[index]}°C</p>
        </div>))}
      </div>
      
    </div>
  )
}
