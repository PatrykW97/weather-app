import React,{useState} from 'react'
import './style.css'
import Navbar from './components/Navbar'
import Weather from './components/Weather'

function App() {
  const [city, getCity]=useState('')
  const [weather, getWeather]=useState({})
  const fetchWeather = evt =>{
    if(evt.key === "Enter"){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&appid=a83a7f0992094f04f999e0b1790adf7a`)
    .then(response => response.json())
    .then(res =>{                   
        getWeather(res)
        getCity('')
        console.log(res)    
    })
    } 
  }
  
  return (  
    <div className="main">
      <Navbar getCity={getCity} city={city} fetchWeather={fetchWeather}/>
      <Weather weather={weather} />
    </div>
  )
}
export default App;