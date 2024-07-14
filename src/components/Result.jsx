import "animate.css";

import { Result1, Result2, Result3, Result4 } from "./ResultPages";
import { useParams } from "react-router-dom";

export default function Result() {
  const { atclNo } = useParams();
  return (
    <>
      <Result1 />
      <Result2 />
      <Result3 />
      <Result4 />
    </>
  );
}
