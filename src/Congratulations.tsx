import { useParams } from "react-router-dom";
import { MessageProps } from "./types";

export default function Congratulations() {
  const params = useParams();

  return <p>Congratulations {params.name2}</p>;
}
