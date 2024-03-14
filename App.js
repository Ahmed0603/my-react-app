import "./App.css";
import { planets } from "./Planets";

function App() {
  return (
    <div className="App">
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h1 key={key}>{planet.name}</h1>
      )}
    </div>
  );
}

export default App;
