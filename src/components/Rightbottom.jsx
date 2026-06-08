import React from 'react'

export const Rightbottom = ({data}) => {
  return (
    <div className='right'>
      <h3>Weather details</h3>
      <div className='details'>
        <div><h5>Humidity</h5><span>{data.current.relative_humidity_2m}%</span></div>
        <div><h5>Wind Speed</h5><span>{data.current.wind_speed_10m} km/h</span></div>
        <div><h5>Pressure</h5><span>{data.current.surface_pressure} hPa</span></div>
        <div><h5>UV Index</h5><span>{data.current.uv_index}</span></div>
        <div><h5>Visibility</h5><span>{data.current.visibility/1000} km</span></div>
      </div>
    </div>
  )
}
