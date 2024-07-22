"use client";

import { useState, useMemo } from "react";

export default function Home() {
  const [add, setadd] = useState(0);
  const [sub, setsub] = useState(100);

  const addition = () => {
    setadd(add + 1);
    console.log("Counter Added");
  };

  const subtract = () => {
    setsub(sub - 1);
  };
 

  const multiplication = useMemo(function multiply(){
    console.log("*******************");
    console.log({add});
    return add * 10;
  }, [add]);

  return (
    <main>
      <title>Use Memo</title>
      <div className="mt-8">
        <h1 className="text-center text-2xl">Hooks Practice!!!!</h1>
        <h2 className="text-center text-2xl">UseMemo</h2>
      </div>

      <div className="mt-8">
        <h1 className="text-center text-2xl">Counter Value:</h1>
      </div>
 <h3 className="text-center">
    multiplication :   
   {multiplication}
   </h3>

      <div className="mt-8 mx-auto w-1/2 text-center">
        <button
          onClick={addition} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Value : {add}
        </button>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={subtract}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Remove Value :  {sub}
        </button>
      </div>
    </main>
  );
}
