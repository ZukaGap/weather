import React from 'react';
import "./days.css";

function Day(props){
    return (
    <div className = "ticket">
        {console.log(props)}
        <p>
            {new Date(props.info.dt * 1000).getDate()}/
            {new Date(props.info.dt * 1000).getMonth() + 1}/
            {new Date(props.info.dt * 1000).getFullYear()}
        </p>
        <div className = "temp">
            <p className="max">{parseInt(props.info.temp.max,10)}° 
                <span className = "min">{parseInt(props.info.temp.min,10)}°</span>
            </p>
            <p className = "weather_info">{props.info.weather[0].description}</p>
        </div>
        <p>Feels: {parseInt(props.info.feels_like.day,10)}°</p>
        <p>Wind speed: {props.info.wind_speed}</p>
        <p>Pressure: {props.info.pressure}hPa</p>
    </div>

)}

export default Day;