"use client";

import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);  
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <main>
      <title>useState</title>
      <div className="mt-8">
        <h1 className="text-center text-2xl">Hooks Practice!!!!</h1>
      </div>

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
    </main>
  );
}
