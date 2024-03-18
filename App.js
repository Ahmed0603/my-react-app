import "./App.css";
import { useState } from "react";

function App() {
  // const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");

  //  const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
          // => ( setShowText(!showText);
        }}>
        {" "}
        Show/Hide{" "}
      </button>
      <h1 style={{ color: textColor }}> HI, MY NAME IS AHMED</h1>
    </div>
  );
}
export default App;
