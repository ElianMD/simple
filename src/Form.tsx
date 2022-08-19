import { ChangeEvent, FormEvent, useState } from "react";

export default function Form() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(email, pass);
  }
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  function changeEmail(event: ChangeEvent<HTMLInputElement>) {
    console.log(event);
    setEmail(event.target.value);
  }
  function changePass(event: ChangeEvent<HTMLInputElement>) {
    setPass(event.target.value);
  }
  function reset() {
    console.log("reset");
    setEmail("");
    setPass("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">email</label>
        <input value={email} name="email" onChange={changeEmail} />
      </p>
      <p>
        <label htmlFor="pass">password</label>
        <input value={pass} name="pass" onChange={changePass} />
      </p>
      <button>Submit</button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </form>
  );
}
