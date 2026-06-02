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
    console.log("use effect called")
    setError(null)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setWeatherData(data)
      console.log(data)
      setLoading(false)
    })
    .catch((err) => {
      setError("No result Found.Try something else.")
      console.log("not found")
    })
  }, [city])

  return (
    <div className='rot'>
      <Left/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCity={setCity}/>
      {loading ? (<p>Loading...</p>) : error ? ( <p>{error}</p>) : ( <Citycard data={weatherData}/>)}
      <HourForecast/>
      <DayForecast/>
      <Tempgraph/>
      <Rightbottom/>
    </div>
  )
}


export default App
