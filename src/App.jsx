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
  setLoading(true);
  setError(null);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        throw new Error("City not found");
      }

      setWeatherData(data);
      setLoading(false);
    })
    .catch((err) => {
      setWeatherData(null);
      setError(err.message);
      setLoading(false);
    });
}, [city]);

  return (
    <div className='rot'>
      <Left/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCity={setCity}/>
      {loading ? (<p>Loading...</p> ) : error ? ( <h1 style={{color:"red"}}>{error}</h1> ) : (<Citycard data={weatherData} />)
}
      {!error&&<HourForecast/>}
      {!error&&<DayForecast/>}
      {!error&&<Tempgraph/>}
      {!error&&<Rightbottom/>}
    </div>
  )
}


export default App
