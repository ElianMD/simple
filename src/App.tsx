import { Fragment, useState } from "react";
import Farewell from "./Farewell";
import Greeting from "./Greeting";
import people from "./people.json";
import { Link, Route, Routes } from "react-router-dom";
import ComeAgain from "./ComeAgain";
import Congratulations from "./Congratulations";
import Form from "./Form";
export default function App(): JSX.Element {
  const greetings = people.names.map((person) => {
    return (
      <Greeting
        key={person.name}
        name={person.name}
        punctuation={person.punctuation}
        age={person.age}
        gender={person.gender}
      />
    );
  });
  const farewell = people.names.map((person) => {
    return (
      <Farewell
        key={person.name}
        name={person.name}
        age={person.age}
        gender={person.gender}
      />
    );
  });
  const comeagain = people.names.map((person) => {
    return (
      <ComeAgain
        key={person.name}
        name={person.name}
        gender={person.gender}
        age={person.age}
      />
    );
  });

  const [count, setCount] = useState(0);
  function increase() {
    setCount((currCount) => currCount + 1);
  }

  const [page, setPage] = useState(1);
  function pages() {
    setPage((currPage) => currPage + 1);
  }
  const links = people.names.map((person) => {
    return (
      <p key={person.name}>
        <Link to={`/congratulations/${person.name}`}>{person.name}</Link>;
      </p>
    );
  });
  return (
    <>
      <h1>Simple</h1>
      <Form />
      <p>You clicked {count} time.</p>
      <button onClick={increase}>Increase</button>
      <p>
        Page {"=>"} {page}
      </p>
      <button onClick={pages}>Next Page</button>
      <p>
        <Link to="/">Home!</Link>
      </p>
      <p>
        <Link to="/comeagain">Come Again!</Link>
      </p>
      <p>
        <Link to="/farewell">Farewell!</Link>
      </p>
      {links}
      <Link to="/greetings">Greetings!</Link>
      <Routes>
        <Route path="/" />
        <Route path="/greetings" element={greetings} />
        <Route path="/comeagain" element={comeagain} />
        <Route path="/farewell" element={farewell} />
        <Route
          path="/congratulations/:name2"
          element={<Congratulations />}
        ></Route>
      </Routes>
    </>
  );
}
