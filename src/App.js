import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const operators = ['+', '-', '*', '/'];

  const handleNumberClick = (number) => {
    setDisplay((prevDisplay) =>
      prevDisplay === '0' ? number.toString() : prevDisplay + number
    );
  };

  const handleOperatorClick = (operator) => {
    setDisplay((prevDisplay) =>
      operators.includes(prevDisplay.charAt(prevDisplay.length - 1))
        ? prevDisplay.slice(0, -1) + operator
        : prevDisplay + operator
    );
  };

  const handleEqualsClick = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="keys">
        <div className="row">
          {[7, 8, 9].map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="row">
          {[4, 5, 6].map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          {[1, 2, 3].map((number) => (
            <button key={number} onClick={() => handleNumberClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={handleClearClick}>C</button>
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
