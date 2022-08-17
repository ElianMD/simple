import { Fragment, useState } from "react";
import Farewell from "./Farewell";
import Greeting from "./Greeting";
import people from "./people.json";
import { Link, Route, Routes } from "react-router-dom";
import ComeAgain from "./ComeAgain";
export default function App(): JSX.Element {
  const greetings = people.names.map((person) => {
    return (
      <Fragment key={person.job}>
        <Greeting
          name={person.name}
          punctuation={person.punctuation}
          age={person.age}
          gender={person.gender}
        />
      </Fragment>
    );
  });
  const farewell = people.names.map((person) => {
    return (
      <Fragment key={person.name}>
        <Farewell name={person.name} age={person.age} gender={person.gender} />
      </Fragment>
    );
  });
  const comeagain = people.names.map((person) => {
    return (
      <Fragment key={person.name}>
        <ComeAgain name={person.name} gender={person.gender} age={person.age} />
      </Fragment>
    );
  });
  const stateArray = useState(0);
  const [count, setCount] = stateArray;
  console.log("state", count);
  function increase() {
    setCount((currCount) => currCount + 2);
    console.log("increase", count);
  }
  return (
    <>
      <h1>Simple</h1>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <p>
        <Link to="/">Home!</Link>
      </p>
      <p>
        <Link to="/comeagain">Come Again!</Link>
      </p>
      <p>
        <Link to="/farewell">Farewell!</Link>
      </p>
      <Link to="/greetings">Greetings!</Link>
      <Routes>
        <Route path="/greetings" element={greetings} />
        <Route path="/comeagain" element={comeagain} />
        <Route path="/farewell" element={farewell} />
      </Routes>
    </>
  );
}
