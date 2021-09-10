import data from './city-weather.json';
import CityDataCard from './CityDataCard';
import { SearchForm } from './searchForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="title"><h2>Weather</h2></header>
      <main>
        {/* { data.map( (city) => <CityDataCard props={city}/> ) } */}
        <SearchForm />
      </main>
    </div>
  );
}

export default App;
