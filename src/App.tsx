import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonLists";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

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
      <Greet name="vridhi" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>
        <Heading>placeholder text</Heading>
      </Oscar>
      <Input value="" handleChange={(event) => console.log(event)} />
      <Button
        handleclick={(event, id) => {
          console.log(event, id, "button clicked");
        }}
      ></Button>
    </div>
  );
}

export default App;
