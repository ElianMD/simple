import { Fragment, useState } from "react";
import Farewell from "./Farewell";
import Greeting from "./Greeting";
import people from "./people.json";
import { Link, Route, Routes } from "react-router-dom";
import ComeAgain from "./ComeAgain";
import Congratulations from "./Congratulations";
import Form from "./Form";
export default function App(): JSX.Element {
  const [count, setCount] = useState(0);
  function increase() {
    setCount((currCount) => currCount + 1);
  }

  const [page, setPage] = useState(1);
  function pages() {
    setPage((currPage) => currPage + 1);
  }
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
      <Routes>
        <Route path="/" />
      </Routes>
    </>
  );
}
