"use client"

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [show, setShow] = useState(true);

  const deleteHeader = () => {
    setShow(false);
  }

  useEffect(() => {
    return () => {
      alert("The component Header Will Going To b Unmounted !!!.");
    };
  }, []);

  return (
    <main>
        <title>Use unmount</title>
    <div className='mt-8 text-center'>
      {show && <h1>Zain Bhi </h1>}
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={deleteHeader}>Delete Header</button>
    </div>
    </main>
  );
}
