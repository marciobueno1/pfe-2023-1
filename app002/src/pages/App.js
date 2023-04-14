import "./App.css";
import { Nome } from "../components/Nome";
import { Pessoas } from "../components/Pessoas";

export const App = () => {
  return (
    <div className="App">
      <Pessoas />
      <Nome />
    </div>
  );
};
