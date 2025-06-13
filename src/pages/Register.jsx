import React, { useState } from 'react';

export default function Register({ toggleFlip }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleRegister = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!username.trim()) newErrors.username = 'Username is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        if (!phone.trim()) newErrors.phone = 'Phone number is required';
        if (!password.trim()) newErrors.password = 'Password is required';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('✅ Register with:', username, email, phone, password);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div className="form-header">
                <h2 className="form-title">SIGN UP</h2>
                <p className="form-subtitle">Create your account and explore features</p>
            </div>

            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="User name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={errors.username ? 'invalid' : ''}
                />
                {errors.username && <span className="error-msg">{errors.username}</span>}
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
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={errors.phone ? 'invalid' : ''}
                />
                {errors.phone && <span className="error-msg">{errors.phone}</span>}
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

            <button type="submit">Sign up</button>

            <div className="alt-action-tag" onClick={toggleFlip}>
                <div className="tag">Login</div>
            </div>
        </form>
    );
}
