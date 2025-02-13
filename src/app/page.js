"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState(true);

  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);

  useEffect(() => {
    if (!state) {
      console.log("unmount state");
    }
  }, [state]);


  useEffect ( ()=>{
   
console.log("User is updated !!!")
 return function (){
  console.log('counter update ke bd unmount')
 }  


  }, [counter]);



  const addValue = () => {
    setCounter(counter + 1);  
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <main>
      <title> Use Effect</title>
      <div className="mt-8">
        <h1 className="text-center text-2xl">Hooks Practice!!!!</h1>
      </div>
      <div className="mt-8 mx-auto w-1/2 text-center">
        <button
          onClick={() => setState(!state)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Toggle
        </button>
      </div>
      {state && (
        <>
          <div className="mt-8">
            <h1 className="text-center text-2xl">Counter Value: {counter}</h1>
          </div>
          <div className="mt-8 mx-auto w-1/2 text-center">
            <button
              onClick={addValue}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Value
            </button>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={removeValue}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove Value
            </button>
          </div>
        </>
      )}
    </main>
  );
}
