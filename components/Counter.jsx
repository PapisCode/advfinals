import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      maxWidth: '320px',
      margin: '2rem auto',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333'
      }}>
        Counter: <span style={{ color: '#7e22ce' }}>{count}</span>
      </h2>

      {count === 0 && (
        <p style={{ color: 'crimson', marginBottom: '1rem' }}>
          The counter is at zero
        </p>
      )}

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '1rem',
        flexWrap: 'wrap'
      }}>
        <button onClick={() => setCount(count + 1)} style={buttonStyle}>➕ Increment</button>
        <button onClick={() => setCount(count - 1)} style={buttonStyle}>➖ Decrement</button>
        <button onClick={() => setCount(0)} style={buttonStyle}>🔁 Reset</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '0.6rem 1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#7e22ce',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  transition: '0.2s ease',
};


