import React, {useState} from 'react'
import CityDataCard from './CityDataCard';


export const SearchForm = () => {

  const [city, setCity] = useState('');
  const [cityWeather, setCityWeather] = useState({});
  console.log(city)
  
  function onSubmit(e, city){
    e.preventDefault();
   if(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
        setCityWeather(data);
        })
    .catch(console.error())
   }
    
  }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e, city)}>
              <input type="text" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Search City" />
              <input type="submit" value='Search' />
           </form> 
           {(Object.keys(cityWeather).length !== 0? <CityDataCard props={cityWeather}/>: <p>Please, Type a city name!</p>)}
           {/* {(cityWeather?.cod && cityWeather.cod === 200? <CityDataCard props= {cityWeather}/> : <p>Please, Type city name!</p>) } */}
           {/* {Object.keys(cityWeather).length !== 0  && <CityDataCard props={cityWeather}/>} */}
        </div>
    )
}
