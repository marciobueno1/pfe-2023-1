import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
