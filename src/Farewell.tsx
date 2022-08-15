import { MessageProps } from "./types";

export default function Farewell(props: MessageProps) {
  return (
    <p>
      Good Bye {props.name} ({props.age})
    </p>
  );
}
