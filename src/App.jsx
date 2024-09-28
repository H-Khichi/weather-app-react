// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import './App.css'
const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

const App = () => {
  const [city, setCity] = useState(""); // For user input (city name)
  const [weatherData, setWeatherData] = useState(null); // Store fetched weather data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dabf9e74498cbfc3dad5f8ea93629653&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle form submit (city search)
  const handleSearch = (searchCity) => {
    if (searchCity) {
      setCity(searchCity);
      fetchWeather(searchCity);
    }
  };

  return (
    <div className="App">
      <div className="weather">
      <Header />
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && !loading && <WeatherDisplay weatherData={weatherData} />}
      </div>
    </div>
  );
};

export default App;
