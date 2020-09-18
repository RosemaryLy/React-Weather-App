import React, { useState, useEffect } from "react";

function WeatherFetch() {
    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [main, setMain] = useState('');

    useEffect(() => {
        fetch(process.env.REACT_APP_API_KEY)
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setFeelsLike(Math.ceil(data.main.feels_like));
            setMainTemp(Math.ceil(data.main.temp));
            setMain(data.weather[0].main);
          });
    }, [])

    return (
        <>
        <div className="card">
        <h1>Toronto</h1>
        <br></br>
            <h3>Current Temperature : {mainTemp} <span>&#176;</span> C</h3>
            <h3>Feels Like: {feels_like} <span>&#176;</span> C</h3>
            <h3>Weather: {main}</h3>
        </div>
        </>
        
    )
}
export default WeatherFetch;