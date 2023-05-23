import { useRef, useState } from "react";
import { Form } from "./components/Form";
import { ThemeContext } from "./contexts/ThemeContext";
import { Button } from "./components/Button";

export default function MyApp() {
  const [theme, setTheme] = useState("dark");
  const inputRef = useRef(null);
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
        <input ref={inputRef} />
        <Button
          onClick={() => {
            setTheme("light");
            inputRef.current.value = "";
            inputRef.current.focus();
          }}
        >
          Switch to light theme
        </Button>
      </ThemeContext.Provider>
      <Button
        onClick={() => {
          setTheme("light");
        }}
      >
        Switch to light theme
      </Button>
    </>
  );
}
