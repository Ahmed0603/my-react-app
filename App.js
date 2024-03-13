import "./App.css";
import { User } from "./User";

function App() {
  const users = [
    { name: "Ahmed", age: 20 },
    { name: "Hanad", age: 24 },
    { name: "Najad", age: 26 },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return (
          <div>
            <User name={user.name} age={user.age} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
