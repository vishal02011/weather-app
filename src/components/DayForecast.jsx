import React from 'react'
import cloudy from "../assets/cloudy.svg";
export const DayForecast = ({data}) => {
  const tempmin=data?.daily?.temperature_2m_min
  return (
    <div className='day'>
      <h3>5-Day Forecast</h3>
      <div>
        <div className='weather-day'>
          <h4>Today</h4>
          <img src={cloudy} alt="Cloudy" />
          <p>25°C</p>
        </div>
        <div className='weather-day'>
          <h4>Tomorrow</h4>
          <img src={cloudy} alt="Cloudy" />
          <p>23°C</p>
        </div>
        <div className='weather-day'>
          <h4>Day 3</h4>
          <img src={cloudy} alt="Cloudy" />
          <p>21°C</p>
        </div>
        <div className='weather-day'>
          <h4>Day 4</h4>
          <img src={cloudy} alt="Cloudy" />
          <p>19°C</p>
        </div>
        <div className='weather-day'>
          <h4>Day 5</h4>
          <img src={cloudy} alt="Cloudy" />
          <p>17°C</p>
        </div>
      </div>
      
    </div>
  )
}
