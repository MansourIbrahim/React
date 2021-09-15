import "./App.css";
import { SearchForm } from "./searchForm";
import { ForecastPage } from "./ForecastPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="title">
          <h2>Weather</h2>
        </header>
        <Switch>
          <Route path="/" exact component={SearchForm} />
          <Route path="/:cityId" exact component={ForecastPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
