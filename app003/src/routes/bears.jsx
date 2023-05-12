import { Link } from "react-router-dom";
import { useBearStore } from "../zustand";
import { useEffect, useState, useReducer } from "react";

const BearCounter = () => {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
};

const Controls = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  const increasePopulationBy = useBearStore(
    (state) => state.increasePopulationBy
  );
  return (
    <p>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={() => increasePopulationBy(10)}>10 up</button>
      <button onClick={removeAllBears}>clear</button>
    </p>
  );
};

function reducer(state, action) {
  if (action.type === "increment_counter") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "increment_counter_by") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }
  throw Error("Unknown action.");
}

export const Bears = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 42, counter2: 100 });
  const [counter, setCounter] = useState(0);
  const [par, setPar] = useState(true);
  const handleClick = () => {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    console.log("useEffect");
    setPar(counter % 2 == 0);
  }, [counter]);
  return (
    <>
      <BearCounter />
      <Controls />
      <Link to="/">Go to Home</Link>
      <hr />
      <h3>
        {counter} - {par ? "par" : "ímpar"}
      </h3>
      <button onClick={handleClick}>Add</button>
      <hr />
      <h3>
        {state.counter} - {par ? "par" : "ímpar"}
        <br />
        {state.counter2} - {par ? "par" : "ímpar"}
      </h3>
      <button
        onClick={() =>
          dispatch({
            type: "increment_counter_by",
            payload: 11,
          })
        }
      >
        Add1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "increment_counter",
          })
        }
      >
        Add2
      </button>
    </>
  );
};
