import React from 'react'
import cloudy from "../assets/cloudy.svg";
export const HourForecast = () => {
  return (
    <div className='hour'>
      <h3 >Hourly Forecast</h3>
      <div className='time'>
      <div>11PM <span><img src={cloudy} alt="Cloudy" /></span> 10°C</div>
      <div>12AM <span><img src={cloudy} alt="Cloudy" /></span> 9°C</div>
      <div>1AM <span><img src={cloudy} alt="Cloudy" /></span> 8°C</div>
      <div>2AM <span><img src={cloudy} alt="Cloudy" /></span> 7°C</div>
      <div>3AM <span><img src={cloudy} alt="Cloudy" /></span> 6°C</div>
      </div>
    </div>
  )
}
