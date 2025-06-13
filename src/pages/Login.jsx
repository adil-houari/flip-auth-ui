// src/pages/Login.jsx
import React, { useState } from 'react';
import '../styles/auth.css';

export default function Login({ toggleFlip }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!email.trim()) newErrors.email = 'Email is required';
        if (!password.trim()) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Logging in with:', email, password);
            // Proceed with login logic
        }
    };

    return (
        <form className="form" onSubmit={handleLogin} noValidate>
            <div className="form-header">
                <h2 className="form-title">LOGIN</h2>
                <p className="form-subtitle">
                    Welcome back! <span className="animate-text">Sign in to access your dashboard</span>
                </p>
            </div>

            <div className="input-wrapper">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? 'invalid' : ''}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="input-wrapper">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={errors.password ? 'invalid' : ''}
                />
                {errors.password && <span className="error-msg">{errors.password}</span>}
            </div>

            <button type="submit">Login</button>

            <div className="alt-action-tag" onClick={toggleFlip}>
                <span className="tag">Sign up</span>
            </div>
        </form>
    );
}
