import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Stations from './Stations'

const URL = "https://api.sr.se/api/v2/channels?format=json&size=100"



function App() {
  const [radioData, setRadioData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {

    fetch(URL)
      .then(response => response.json())
      .then(data => setRadioData(data.channels))
  }, [search])


  return (
    <div className="container">
      
      <input className="input" type="text" onChange={ (e) => setSearch(e.target.value)} />

      <Stations data={radioData} search={search} />

    </div>
  )
}

export default App
