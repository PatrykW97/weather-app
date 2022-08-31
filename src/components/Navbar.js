import React from 'react'


const Navbar = ({getCity,city,fetchWeather})=>{
    return(
        <div className="search">
            <input type="text" className="search-bar" placeholder='Wyszukaj!' onChange={e=>getCity(e.target.value)} value={city} onKeyPress={fetchWeather}/>
        </div>
    )
}

export default Navbar
