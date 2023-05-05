import { Link } from "react-router-dom";
import { useBearStore } from "../zustand";

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

export const Bears = () => {
  return (
    <>
      <BearCounter />
      <Controls />
      <Link to="/">Go to Home</Link>
    </>
  );
};
