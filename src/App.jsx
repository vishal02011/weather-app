import React from 'react'
import { Citycard } from './components/Citycard'
import { DayForecast } from './components/DayForecast'
import { HourForecast } from './components/HourForecast'
import { Left } from './components/Left'
import { Rightbottom } from './components/Rightbottom'
import { Search } from './components/Search'
import { Tempgraph } from './components/Tempgraph'

const App = () => {
  return (
    <div className='rot'>
      <Left/>
      <Search/>
      <Citycard/>
      <HourForecast/>
      <DayForecast/>
      <Tempgraph/>
      <Rightbottom/>
    </div>
  )
}


export default App
