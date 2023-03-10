import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header>
          <h1>Primeiro App React</h1>
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
