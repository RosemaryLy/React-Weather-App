import React, { useState, useEffect } from "react";

function WeatherFetch() {
    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');

    useEffect(() => {
        fetch(process.env.REACT_APP_API_KEY)
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            setDescription(data.weather[0].description);
            setMain(data.weather[0].main);
          });
    }, [])

    return (
        <>
        <h1>Toronto</h1>
            <h1>Temperature : {mainTemp} Degrees Celsius</h1>
            <h1>Feels Like: {feels_like} </h1>
            <h1>Weather Parameter: {main}</h1>
            <h1>Description : {description}</h1>
        </>
    )
}
export default WeatherFetch;