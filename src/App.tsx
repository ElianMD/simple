import { Fragment } from "react";
import Farewell from "./Farewell";
import Greeting from "./Greeting";
import people from "./people.json";
export default function App(): JSX.Element {
  const greetings = people.names.map((person) => {
    return (
      <Fragment key={person.job}>
        <Greeting
          name={person.name}
          punctuation={person.punctuation}
          age={person.age}
        />
        <Farewell name={person.name} age={person.age} />
      </Fragment>
    );
  });

  return (
    <>
      {greetings}
      <p>World</p>
      <Farewell name="Harry" age={25} />
    </>
  );
}
