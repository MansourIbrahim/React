import React from "react";

const CityDataCard = ({ props }) => {
  
        return(
          (props.cod==="404"?
          (<p>Invalid city. Please, Type a city name!</p>):
         ( <div className="city-card">
               <h2>{props.name}, {props.sys.country}</h2>
               <p>
                    <strong>{props.weather.main}</strong><br />
                    {props.weather.description}
               </p>
               <p>min temp: {(props.main.temp_min - 273.15).toFixed(1)}</p>
               <p>max temp: {(props.main.temp_max - 273.15).toFixed(1)}</p>
               <p>location: {props.coord.lon}, {props.coord.lat}</p>
           </div>)
        )
  
        )
}

export default CityDataCard; 