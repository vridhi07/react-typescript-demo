import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonLists";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { User } from "./state/User";
import { Counter } from "./state/Counter";
import { ThemeContextProvider } from "./context/themeContext";
import { Box } from "./context/Box";
import { Users } from "./context/Users";
import { UserContextProvider } from "./context/UserContext";
import { DomRef } from "./ref/DomRef";
import { Private } from "./auth/Private";
import { Profile } from "./auth/Profile";
import { List } from "./generics/List";
import { RandomNumber } from "./restrictions/RandomNumber";
import { Toast } from "./templateliterals/Toast";
import { CustomButton } from "./html/Button";
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
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <Users />
      </UserContextProvider>
      <DomRef />
      <Private isLoggedIn={true} Component={Profile} />
      <List
        items={["batman", "superman", "wonder woman"]}
        onClick={(items) => {
          console.log(items);
        }}
      />
      <List
        items={[1, 2, 3]}
        onClick={(items) => {
          console.log(items);
        }}
      />
      <List
        items={[
          {
            first: "vridhi",
            last: "wadhawan",
          },
          {
            first: "clark",
            last: "kent",
          },
          {
            first: "princess",
            last: "diana",
          },
        ]}
        onClick={(items) => {
          console.log(items);
        }}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="left - center" />
      <CustomButton
        variant="primary"
        onClick={() => {
          console.log("clicked");
        }}
      >
        {/* <div>primary button</div> */}
        primary button
      </CustomButton>
    </div>
  );
}

export default App;
