import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="about">About Us</Link>
      <br />
      <Link to="pessoas">Pessoas (Star Wars)</Link>
    </div>
  );
};
