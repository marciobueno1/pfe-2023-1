import "./App.css";
import { Nome } from "../../components/Nome";
import { Pessoas } from "../../components/Pessoas";

const App = () => {
  return (
    <div className="App">
      <Pessoas />
      <Nome />
    </div>
  );
};

export default App;
