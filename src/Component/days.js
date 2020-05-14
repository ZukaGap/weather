import React from 'react';
import "./days.css";

function Day(props){
    const copy = () => {
        let day = new Date(props.info.dt * 1000).getDate();
        let month = new Date(props.info.dt * 1000).getMonth() + 1;
        let year = new Date(props.info.dt * 1000).getFullYear();
        let maxT = parseInt(props.info.temp.max,10) + "°(MAX)";
        let minT = parseInt(props.info.temp.min,10) + "°(MIN)";
        let wdesc = props.info.weather[0].description;
        let feels = parseInt(props.info.feels_like.day,10) + "°";
        let wspeed = props.info.wind_speed;
        let pres = props.info.pressure + "hPa";

        var dummy = document.createElement('input'),
        text = day + "/" + month + "/" + year + "\n" + "Temperature: " +
                 maxT + "/" + minT + "\n" + wdesc + "\n" + "Feeling: " + feels +
                 "\n" + "Speed: " + wspeed + "\n" + "Pressure: " + pres;
    
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }
    
    return (
    <div className = "ticket" onClick={copy}>
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