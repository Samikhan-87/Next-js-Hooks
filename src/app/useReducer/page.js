


"use client";

import { useReducer } from "react";

export default function Home() {

  const initialValue = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        console.log(state,action);
        return state + 1;
      case "decrement":
        console.log(state,action);
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  
  const addValue = () => {
    dispatch({ type: "increment" });
  };


  const removeValue = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main>
     <title>Use Reducer</title>
      <div className="mt-8">
        <h1 className="text-center text-2xl">Hooks Practice!!!!</h1>
      </div>
      <div className="mt-8">
        <h1 className="text-center text-2xl">Counter Value: {state}</h1>
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
    </main>
  );
}
