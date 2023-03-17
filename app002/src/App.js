import { useState } from "react";
import "./App.css";
import { Saudacao } from "./components/Saudacao";

function App() {
  const [nome, setNome] = useState("");
  const [nomeInput, setNomeInput] = useState("");
  const handleBtOKClick = () => {
    setNome(nomeInput);
  };
  const handleNomeChange = (evt) => {
    setNomeInput(evt.target.value);
  };
  return (
    <div className="App">
      <Saudacao nome={nome} />
      <p>
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={handleNomeChange}
        />
        <button onClick={handleBtOKClick}>OK</button>
      </p>
    </div>
  );
}

export default App;
