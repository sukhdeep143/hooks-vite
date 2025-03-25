import React from 'react'
import { useState, useEffect } from "react";


function UseState() {

    const [colour, setColour] = useState("red");
  const colorClasses = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  useEffect (()=>{
    console.log("The Component is mounted");

    return function(){
      console.log("Component is unounted");
      
    }
    
  },[])

  useEffect (()=>{
    console.log("The component is update");
    
  },[colour])

  return (
    <main className={`${colorClasses[colour]}`}>
      <div className={`${colorClasses[colour]} p-15  rounded-4xl`}>
        {" "}
        My colour is now {colour}
      </div>
      <div className="pt-2">
        <button
          onClick={() => {
            setColour("blue");
          }}
        >
          Click Me to make blue
        </button>
      </div>
      <div className="pt-2">
        <button
          onClick={() => {
            setColour("red");
          }}
        >
          Click Me to make red
        </button>
      </div>
      <div className="pt-2">
        <button
          onClick={() => {
            setColour("green");
          }}
        >
          Click Me to make green
        </button>
      </div>

      <div className="pt-2">
        <button
          onClick={() => {
            setColour("yellow");
          }}
        >
          click me to make yellow
        </button>
      </div>
    </main>
  )
}

export default UseState