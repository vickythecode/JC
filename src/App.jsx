import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [step, setStep] = useState(0);

  const reset = () => {
    setNum(0);
    setHistory([0]);
    setStep(0);
  };

  const increment = () => {
    if (num < 150) {
      const newNum = num + 1;
      const newHistory = [...history.slice(0, step + 1), newNum];
      console.log(newHistory);
      
      setHistory(newHistory);
      setStep(newHistory.length - 1);
      setNum(newNum);
    }
  };

  const decrement = () => {
    if (num > 0) {
      const newNum = num - 1;
      const newHistory = [...history.slice(0, step + 1), newNum];
      console.log(newHistory);
      setHistory(newHistory);
      setStep(newHistory.length - 1);
      setNum(newNum);
    }
  };

  const undo = () => {
    if (step > 0) {
      setStep(step - 1);
      setNum(history[step - 1]);
    }
  };

  const redo = () => {
    if (step < history.length - 1) {
      setStep(step + 1);
      setNum(history[step + 1]);
    }
  };

  return (
    <div className="app">
      <div className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(num / 150) * 100}%` }} />
      </div>
      <div className="history-controls">
        <button onClick={undo} disabled={step === 0}>
          Undo
        </button>
        <button onClick={redo} disabled={step === history.length - 1}>
          Redo
        </button>
      </div>
      <p>Current Number: {num}</p>
    </div>
  );
};

export default App;
