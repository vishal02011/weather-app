import React from 'react'
import cloudy from "../assets/cloudy.svg";
import images from "./images";
export const HourForecast = ({data}) => {
  const temp=data.hourly.temperature_2m.slice(Number(data.current.time.slice(11,13)),Number(data.current.time.slice(11,13))+5);
  const time=data.hourly.time.slice(Number(data.current.time.slice(11,13)),Number(data.current.time.slice(11,13))+5)
  const code=data.hourly.weather_code.slice(Number(data.current.time.slice(11,13)),Number(data.current.time.slice(11,13))+5)
  

  
  
  return (
    <div className='hour'>
      <h3 >Hourly Forecast</h3>
      <div className='time'>
        {time.map((t,i)=><div key={i}>{Number(t.slice(11,13))%12==0 || Number(t.slice(11,13))%12==12?12:Number(t.slice(11,13))%12}{Number(data.current.time.slice(11,13))<=12?"AM":"PM"}<span><img src={images(code[i])} alt="Cloudy" /></span> {temp[i]}°C</div>)}
      <div>11PM <span><img src={cloudy} alt="Cloudy" /></span> 10°C</div>
      
      </div>
    </div>
  )
}
