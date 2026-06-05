import React from 'react'
import search from "../assets/search.svg";

export const Search = ({ searchTerm, setSearchTerm, setCity }) => {
  return (
    <div className='search'>
      <button onClick={()=>{if (length.searchTerm!=0){setCity(searchTerm)}}}><img src={search} alt="Search" /></button>
      <input type="text" placeholder="Search for a city..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )
}
