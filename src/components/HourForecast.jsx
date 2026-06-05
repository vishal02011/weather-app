import React from 'react'
import cloudy from "../assets/cloudy.svg";
import images from "./images";
export const HourForecast = ({data}) => {
  const temp=data.hourly.temperature_2m.slice(0,5);
  const time=data.hourly.time.slice(0,5)
  const code=data.hourly.weather_code.slice(0,5)
  
  console.log(time,1)
  
  
  return (
    <div className='hour'>
      <h3 >Hourly Forecast</h3>
      <div className='time'>
        {time.map((t,i)=><div key={i}>{t.slice(11,16)} <span><img src={images(code[i])} alt="Cloudy" /></span> {temp[i]}°C</div>)}
      <div>11PM <span><img src={cloudy} alt="Cloudy" /></span> 10°C</div>
      
      </div>
    </div>
  )
}
