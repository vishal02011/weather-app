import React from 'react'

export const Rightbottom = () => {
  return (
    <div className='right'>
      <h3>Weather details</h3>
      <div className='details'>
        <div><h5>Humidity</h5><span>65%</span></div>
        <div><h5>Wind Speed</h5><span>10 km/h</span></div>
        <div><h5>Pressure</h5><span>1013 hPa</span></div>
        <div><h5>UV Index</h5><span>5</span></div>
        <div><h5>Visibility</h5><span>10 km</span></div>
      </div>
    </div>
  )
}
