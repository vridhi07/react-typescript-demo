import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonLists";

function App() {
  const personName = {
    first: "vridhi",
    last: "wadhawan",
  };

  const nameList = [
    {
      first: "vridhi",
      last: "wadhawan",
    },
    {
      first: "clark",
      last: "kent",
    },
    {
      first: "Princess",
      last: "Diaana",
    },
  ];

  return (
    <div className="App">
      <Greet name="vridhi" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
