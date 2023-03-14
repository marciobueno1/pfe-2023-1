import "./App.css";
import { Header } from "./components/Header";
import { NumberHeader3 } from "./components/NumberHeader";

function App() {
  return (
    <>
      <div className="App">
        <Header>
          <h1>Primeiro App React</h1>
          <NumberHeader3 number={10} />
          <NumberHeader3 number={4} />
        </Header>
        <hr />
        <Header>
          <h2>Subtítulo!</h2>
        </Header>
      </div>
      <h1>App React</h1>
    </>
  );
}

export default App;
