import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;
  const iconCode = weather[0].icon; // Get the icon code from the API response
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return (
    <div className="weather-display">
      <div className="city-name">
      <h2>Weather in {name}</h2>
      </div>
      <div className="img">
      <img src={iconUrl} alt={weather[0].description} /> {/* Weather icon */}
      </div>
      <div className="data">
        <div className="left-data">
          <p>
          {main.temp}°C <br /> Temperature </p><hr />
          <p>{main.humidity}% <br /> Humidity</p>
        </div>
        <div className="right-data">
          <p>{weather[0].description} <br /> Condition </p><hr />
          <p> {wind.speed} m/s <br /> Wind Speed </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
