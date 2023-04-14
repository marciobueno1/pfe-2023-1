import { useEffect, useState } from "react";
import { Pessoa } from "./Pessoa";

// const pessoas = [
//   { id: 1, name: "nome 1", age: 1 },
//   { id: 2, name: "nome 2", age: 2 },
//   { id: 3, name: "nome 3", age: 3 },
//   { id: 4, name: "nome 4", age: 4 },
// ];
export const Pessoas = () => {
  const [url, setUrl] = useState("https://swapi.dev/api/people/?page=1");
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("useEffect run");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    return () => {
      console.log("useEffect cleanup code");
    };
  }, [url]);

  return (
    <>
      <p>
        <button onClick={() => setUrl(data.previous)} disabled={!data.previous}>
          Anterior
        </button>
        <button onClick={() => setUrl(data.next)} disabled={!data.next}>
          Próximo
        </button>
      </p>
      <hr />
      {data.results &&
        data.results.map((p) => <Pessoa key={p.url} pessoa={p} />)}
    </>
  );
};
