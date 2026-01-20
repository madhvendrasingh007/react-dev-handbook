// Counter.jsx - Main Counter Component
import { useState } from 'react';
import Button from './Button';

function Counter() {
  // 🎯 STATE: The counter value (starts at 0)
  const [count, setCount] = useState(0);

  // 🎯 EVENT HANDLERS: Functions that update state
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // 🎯 CONDITIONAL LOGIC: Determine status based on count
  let status = '';
  let statusEmoji = '';

  if (count > 0) {
    status = 'Positive';
    statusEmoji = '✅';
  } else if (count < 0) {
    status = 'Negative';
    statusEmoji = '⚠️';
  } else {
    status = 'Zero';
    statusEmoji = '⭕';
  }

  // 🎯 RENDER: What the user sees
  return (
    <div className="counter-container">
      <h1>🎯 Counter App</h1>

      {/* Display current count */}
      <div className="count-display">
        <h2>{count}</h2>
      </div>

      {/* Control buttons */}
      <div className="button-group">
        <Button
          label="➖ Decrement"
          onClick={handleDecrement}
          color="red"
        />
        <Button
          label="🔄 Reset"
          onClick={handleReset}
          color="gray"
        />
        <Button
          label="➕ Increment"
          onClick={handleIncrement}
          color="green"
        />
      </div>

      {/* Status display */}
      <div className="status">
        <p>Status: {status} {statusEmoji}</p>
      </div>

      {/* Milestone alerts (conditional rendering) */}
      {count >= 100 && (
        <div className="alert">
          <p>🎉 Wow! You reached 100!</p>
        </div>
      )}

      {count <= -100 && (
        <div className="alert alert-danger">
          <p>😰 You're at -100!</p>
        </div>
      )}
    </div>
  );
}

export default Counter;