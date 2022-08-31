import React from 'react'


const Navbar = ({getCity,city,fetchWeather})=>{
    return(
        <div className="wyszukaj">
            <input type="text" className="pasek-szukaj" placeholder='Wyszukaj!' onChange={e=>getCity(e.target.value)} value={city} onKeyPress={fetchWeather}/>
        </div>
    )
}

export default Navbar
