import React from "react";
import { Link } from "react-router-dom";

const CityDataCard = ({ props, setCityWeather }) => {
  const { id } = props;
  return (
    <div className="city-card">
      <div className="img-container">
        <img
          alt="Delete"
          onClick={() => {
            setCityWeather((cityWeather) =>
              cityWeather.filter((city) => city.id !== id)
            );
          }}
          src="https://icons-for-free.com/iconfiles/png/512/circle+close+cross+delete+exit+remove+icon-1320085939591374353.png"
        />
      </div>
      <Link to={`/${id}`}>
        <div className="text-container">
          <h2>
            {props.name}, {props.sys.country}
          </h2>
          <p>
            <strong>{props.weather.main}</strong>
            <br />
            {props.weather.description}
          </p>
          <p>min temp: {(props.main.temp_min - 273.15).toFixed(1)}</p>
          <p>max temp: {(props.main.temp_max - 273.15).toFixed(1)}</p>
          <p>
            location: {props.coord.lon}, {props.coord.lat}
          </p>
        </div>
      </Link>
    </div>
  );
  // )
};

export default CityDataCard;
