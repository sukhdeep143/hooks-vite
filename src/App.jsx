import { useState } from 'react'

import './App.css'


function App() {

  const [colour, setColour] = useState("red");
  const colorClasses = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500"
  };
  

  return (
    <>
     <div className={`${colorClasses[colour]}`}> My colour is now {colour}</div>
     <button
     onClick={()=>{setColour("blue")}}

     >Click Me to make blue</button>
     
    </>
  )
}

export default App
