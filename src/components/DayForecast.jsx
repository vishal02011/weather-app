import React from 'react'
import cloudy from "../assets/cloudy.svg";
export const DayForecast = () => {
  return (
    <div className='day'>
      <h1>5-Day Forecast</h1>
      <div>
        <div className='weather-day'>
          <h2>Today</h2>
          <img src={cloudy} alt="Cloudy" />
          <p>25°C</p>
        </div>
        <div className='weather-day'>
          <h2>Tomorrow</h2>
          <img src={cloudy} alt="Cloudy" />
          <p>23°C</p>
        </div>
        <div className='weather-day'>
          <h2>Day 3</h2>
          <img src={cloudy} alt="Cloudy" />
          <p>21°C</p>
        </div>
        <div className='weather-day'>
          <h2>Day 4</h2>
          <img src={cloudy} alt="Cloudy" />
          <p>19°C</p>
        </div>
        <div className='weather-day'>
          <h2>Day 5</h2>
          <img src={cloudy} alt="Cloudy" />
          <p>17°C</p>
        </div>
      </div>
      
    </div>
  )
}
