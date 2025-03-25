
import { useState } from "react";
import "./App.css";
import UseState from "./components/UseState";

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div>
      <button onClick={() =>setMode(!mode)}>Toggle</button>
      {mode ? <UseState /> : ""}

    </div>
  );
}

export default App;
