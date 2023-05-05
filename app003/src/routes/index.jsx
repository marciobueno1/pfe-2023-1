import { Link } from "react-router-dom";
import { useBearStore } from "../zustand";

export default function Index() {
  const bears = useBearStore((state) => state.bears);
  return (
    <p id="zero-state">
      This is a demo for React Router.
      <br />
      Check out{" "}
      <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
      <br />
      There are {bears} bears around here...
      <br />
      <Link to="bear">Go to Bears</Link>
    </p>
  );
}
