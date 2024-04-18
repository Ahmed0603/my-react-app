// export const planets = [
//   { name: "Mars", isGasPlanet: false },
//   { name: "Earth", isGasPlanet: false },
//   { name: "Jupiter", isGasPlanet: true },
//   { name: "Venus", isGasPlanet: false },
//   { name: "Neptune", isGasPlanet: true },
//   { name: "Uranus", isGasPlanet: true },
// ];

import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  // let age = 0;

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase Age!</button>
    </div>
  );
}
export default App;
