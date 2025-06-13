// src/components/FlipContainer.jsx
import React, { useState } from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';
import '../styles/auth.css';

export default function FlipContainer() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="main">
      <div className={`form-container ${flipped ? 'flipped' : ''}`}>
        <div className="login">
          <Login toggleFlip={() => setFlipped(true)} />
        </div>
        <div className="signup">
          <Register toggleFlip={() => setFlipped(false)} />
        </div>
      </div>
    </div>
  );
}
