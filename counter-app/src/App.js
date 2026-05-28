import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        backgroundColor: '#f4f6f9',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          width: '350px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ color: '#333' }}>React Counter App</h1>

        <h2 style={{ color: '#555' }}>Counter: {count}</h2>

        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={increase}
            style={{
              padding: '10px 15px',
              margin: '5px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#4caf50',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Increase
          </button>

          <button
            onClick={decrease}
            style={{
              padding: '10px 15px',
              margin: '5px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#ff9800',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Decrease
          </button>

          <button
            onClick={reset}
            style={{
              padding: '10px 15px',
              margin: '5px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#f44336',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>

        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: '90%',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />

        <h3 style={{ color: '#444', marginTop: '20px' }}>
          Your Message: {message}
        </h3>

        {count >= 5 && (
          <h2 style={{ color: '#4caf50' }}>Goal Reached!</h2>
        )}
      </div>
    </div>
  );
}

export default App;
