import React from 'react'
import { Citycard } from './components/Citycard'
import { DayForecast } from './components/DayForecast'
import { HourForecast } from './components/HourForecast'
import { Left } from './components/Left'
import { Rightbottom } from './components/Rightbottom'
import { Search } from './components/Search'
import { Tempgraph } from './components/Tempgraph'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {
  const API_KEY = '9c11a5305e2c78e570fe31a352f06f74'
  const [searchTerm, setSearchTerm] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity]=useState("delhi")
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ API_KEY }&units=metric`
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState(null)

useEffect(() => {
  async function fetchWeather() {
    try {
      setLoading(true);
      setError(null);

      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10`
      );

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      geoData.results.sort(
        (a, b) => (b.population || 0) - (a.population || 0)
      );

      const location = geoData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,surface_pressure,cloud_cover,visibility,weather_code,uv_index&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=7&timezone=auto`
      );

      const weather = await weatherResponse.json();

      setWeatherData({
        city: location.name,
        country: location.country,
        latitude: location.latitude,
        longitude: location.longitude,
        current: weather.current,
        hourly: weather.hourly,
        daily: weather.daily,
      });
      console.log({
        city: location.name,
        country: location.country,
        latitude: location.latitude,
        longitude: location.longitude,
        current: weather.current,
        hourly: weather.hourly,
        daily: weather.daily,
      })
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  fetchWeather();
}, [city]);

  return (
    <div className='rot'>
      <Left/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCity={setCity}/>
      {loading ? (<p>Loading...</p> ) : error ? ( <h1 style={{color:"red"}}>{error}</h1> ) : (<Citycard data={weatherData.city} />)
}
      {!error&&<HourForecast/>}
      {!error&&<DayForecast/>}
      {!error&&<Tempgraph/>}
      {!error&&<Rightbottom/>}
    </div>
  )
}


export default App
