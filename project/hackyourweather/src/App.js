import data from './city-weather.json';
import CityDataCard from './cityDataCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="title"><h2>Weather</h2></header>
      <main>
        { data.map( (city) => <CityDataCard props={city}/> ) }
      </main>
    </div>
  );
}

export default App;
