
import { useState, createContext } from "react";
import "./App.css";
import UseState from "./components/UseState";
import ChildC from "./components/ChildC";


const UserContext = createContext();
function App() {
  const [Mode, setMode] = useState(true);
  const [User, SetUser] = useState({name: "Sukhdeep"})


  return (
    <div className="">
      <button className="m-5 hover:font-bold" onClick={() =>setMode(!Mode)}>
        Toggle
      </button>
      {Mode ? <UseState /> : ""}

      <UserContext.Provider value={User}>
        <ChildC />
      </UserContext.Provider>

    </div>
  );
}

export default App;
export {UserContext};
