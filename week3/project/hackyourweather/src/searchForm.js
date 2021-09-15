import React, { useState } from "react";
import CityDataCard from "./CityDataCard";

export const SearchForm = () => {
  const [city, setCity] = useState("");
  const [invalidCity, setInvalidCity] = useState(false);
  const [cityWeather, setCityWeather] = useState([]);
   function onSubmit(e, city) {
    e.preventDefault();
    if (city) {
      setInvalidCity(false);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fb943cf984aaf8d5a4a1c6c09291627`
      )
        .then((response) => response.json())
        .then((data) => {
          data.cod === "404"
            ? setInvalidCity(true)
            : setCityWeather([data, ...cityWeather]);
          console.log(data);
        })
        .catch(console.error());
    }
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, city)}>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Search City"
        />
        <input type="submit" value="Search" />
      </form>
      {Object.keys(cityWeather).length === 0 ? (
        <p>Please, Type a city name!</p>
      ) : invalidCity === true ? (
        <p>Invalid city. Please, Type a city name!</p>
      ) : (
        cityWeather.map((eachSearch) => {
          return (
            <CityDataCard
              key={eachSearch.id}
              props={eachSearch}
              setCityWeather={setCityWeather}
            />
          );
        })
      )}
    </div>
  );
};
