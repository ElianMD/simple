import { MessageProps } from "./types";

export default function ComeAgain(props: MessageProps) {
  return (
    <p>
      Come again my dear {props.name} {props.punctuation} !
    </p>
  );
}
