import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("https://swapi.dev/api/people/?page=1");
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [url],
    queryFn: () => axios.get(url).then((res) => res.data),
  });
  if (isLoading) {
    return (
      <div className="App">
        <h1>Carregando...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="App">
        <h1>Erro: {error.message}</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Personagens de Star Wars</h1>
      {isFetching && <h1>Fetching...</h1>}
      <hr />
      <button onClick={() => setUrl(data.previous)} disabled={!data.previous}>
        Anterior
      </button>
      <button onClick={() => setUrl(data.next)} disabled={!data.next}>
        Próxima
      </button>
      <hr />
      {data.results.map((person) => (
        <div key={person.url}>
          <h3>{person.name}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
