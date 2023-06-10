import React, { useState, useEffect, useMemo } from "react";

import { Knob } from 'primereact/knob';
import { InputText } from "primereact/inputtext";
import './App.css';

const App = () => {
  const [alphabet, setAlphabet] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const words = alphabet.split(" ");
    setWordCount(words.length);
  }, [alphabet]);

  useMemo(() => {
    let settime = 100;
    const interval = setInterval(() => {
      settime = 10;
      if (settime === 0) {
        clearInterval(interval); // Pass the interval identifier to clearInterval
      }
      setTimer(settime);
    }, 2000);
  }, []);

  return (
    <div align="center">
      <div className="">
        <label htmlFor="" style={{ color: "darkblue"}} className='font-bold text-6x1'>WAIT and TYPE here</label>
        <Knob valueColor={"lightbrown"} rangeColor={"darkgreen"} className='mt-4' value={timer} size={200} min={0} max={59} readOnly />
        <h3 className='text-primary m-0 p-0'>Words Count: <span style={{ color: "darkbrown" }}>{wordCount}</span></h3>
        <InputText className='mt-4' value={alphabet} onChange={(e) => setAlphabet(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
