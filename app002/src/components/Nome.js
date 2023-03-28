import { useState } from "react";
import { Saudacao } from "./Saudacao";

export const Nome = () => {
  const [nome, setNome] = useState("");
  const [nomeInput, setNomeInput] = useState("");
  const handleBtOKClick = () => {
    setNome(nomeInput);
  };
  const handleBtLimparClick = () => {
    setNomeInput("");
  };
  return (
    <>
      <Saudacao nome={nome} />
      <p>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nomeInput}
          onChange={(evt) => setNomeInput(evt.target.value)}
        />
        <button onClick={handleBtOKClick}>OK</button>
        <button onClick={handleBtLimparClick}>Limpar</button>
      </p>
    </>
  );
};
