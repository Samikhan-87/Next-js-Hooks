"use client";

import { useState,useCallback } from "react";
import ChildA from "./Child";

export default function Home() {
  const [add, setadd] = useState(0);
//   const [counter,Setcounter] = useState(0);

  const addition = () => {
    setadd(add + 1);
    console.log("Counter Added");
  };

//   const Count = () => {
//     Setcounter(counter + 2);
//     console.log("Counter 2 Added");
//   };

  const learn = useCallback (() => {

  },[]);

  return (
    <main>
      <title>Use CallBack</title>
      <div className="mt-8">
        <h1 className="text-center text-2xl">Hooks Practice!!!!</h1>
        <h2 className="text-center text-2xl">Use CallBack</h2>
        <ChildA learn = {learn} />
      </div>
      
      <div className="mt-8 mx-auto w-1/2 text-center">
        <button
          onClick={addition} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Value : {add}
        </button>
      </div>
      {/* <div className="mt-8 mx-auto w-1/2 text-center">
        <button
          onClick={Count} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Counter : {counter}
        </button>
      </div> */}
    </main>
  );
}
