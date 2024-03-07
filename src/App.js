import "./App.css";

function App() {
  return (
    <div className="App">
      <User
        firstName="Ahmed"
        surName="Abdulrahman"
        email="ahmedabdi03@hotmail.com"
        age={20}
      />
      <User
        firstName="Hanad"
        surName="Abdulrahman"
        email="hanadabdi236@hotmail.com"
        age={24}
      />
      <User />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.firstName}</h1>
      <h1>{props.surName}</h1>
      <h2>{props.email}</h2>
      <h3>{props.age}</h3>
    </div>
  );
};

export default App;
