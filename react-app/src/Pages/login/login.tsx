import React, { useState } from 'react';
import styles from './loginStyle.module.scss';
import logo from '../../assets/login/logo.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginClick = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('http://localhost:5122/api/Auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                // Handle error response
                const errorData = await response.json();
                alert(errorData.message || "Invalid credentials. Please try again.");
            } else {
                const data = await response.json();
                // Save token to local storage or context
                localStorage.setItem('token', data.token);
                alert("Welcome Back!");
                navigate('/overview'); // Redirect to the overview page
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.login_card}>
                <div className={styles.login_left}>
                    <br />
                    <div className={styles.login_logo}>
                        <img src={logo} alt="Logo" className='logoImg' />
                    </div>
                    <br />
                    <h1>Welcome back!</h1>
                    <p className={styles.muted}>Provide your details so we can continue to your crypto adventure!</p>
                    <br />
                    <form onSubmit={handleLoginClick}>
                        <label className={styles.muted}>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className={styles.muted}>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Continue</button>
                    </form>
                    <br />
                    <p className={styles.register_link}><span className={styles.muted}>Don’t have an account? </span><a href="/">Register</a></p>
                </div>
                <div className={styles.login_right}></div>
            </div>
        </div>
    );
};

export default LoginPage;
