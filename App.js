import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import { Navbar } from "./pages/Navbar";
import { Profile } from "./pages/Profile";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("AhmedTech!");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route
            path="/profile"
            element={<Profile username={username} setUsername={setUsername} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import { AppContext } from "../App";
// import { useContext } from "react";

// export const ChangeProfile = (props) => {
//   const { setUsername } = useContext(AppContext);

//   const [newUsername, setNewUsername] = useState("");
//   return (
//     <div>
//       <input
//         onChange={(event) => {
//           setNewUsername(event.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           props.setUsername(newUsername);
//         }}>
//         Change Username
//       </button>
//     </div>
//   );
// };
