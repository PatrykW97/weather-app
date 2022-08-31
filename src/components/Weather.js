import React from 'react'


const Weather =({weather})=>{
    return(
        <>
        {(typeof weather.main !="undefined") ?(
            <div className="weather">
                <div className="city">{weather.name}</div>
                <div className="humidity">Wilgotność powietrza {weather.main.humidity}%</div>
                <div className="weather-desc">{weather.weather[0].main}</div>
                <div className="temp">Temperatura {Math.round(weather.main.temp)}°C</div>
                <div className="pressure">Ciśnienie {weather.main.pressure} hPa</div>
                <div className="wind">Prędkość wiatru {weather.wind.speed} m/s</div>
            </div>  
            ):('')}
        </>
    )
}
export default Weather