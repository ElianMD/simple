import { MessageProps } from "./types";

export default function Greeting(props: MessageProps) {
  return (
    <h1>
      Hello {props.name} {props.punctuation}
    </h1>
  );
}
