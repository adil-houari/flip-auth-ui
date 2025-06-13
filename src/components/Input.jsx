// src/components/Input.jsx
import React from 'react';

export default function Input({ type, placeholder, value, onChange, isInvalid }) {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={isInvalid ? 'invalid' : ''}
        required
      />
      {isInvalid && <span className="error-msg">Veuillez remplir ce champ</span>}
    </div>
  );
}
