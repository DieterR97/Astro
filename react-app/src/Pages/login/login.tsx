import React, { useEffect, useState } from 'react';
import styles from './loginStyle.module.scss';
import logo from '../../assets/login/logo.png';
import { useNavigate } from 'react-router-dom';

// import { ipcRenderer } from 'electron';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false);

    // const [triggerRender, setTriggerRender] = useState(false);

    useEffect(() => {
        if (!isSubmitting) {
            document.getElementById('emailField')?.focus();
        }
    }, [isSubmitting]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission

        e.stopPropagation();

        setIsSubmitting(true); // Set submitting state

        // setTriggerRender(!triggerRender); // Force re-render

        try {
            const response = await fetch('http://localhost:5122/api/Auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "Invalid credentials. Please try again.");
                // Send a message to the main process to blur and refocus the window
                // ipcRenderer.send('trigger-blur-focus');
            } else {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                alert("Welcome Back!");
                navigate('/overview');
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
            
            // document.getElementById("emailField")?.focus();
        } finally {
            setIsSubmitting(false); // Reset submitting state
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
                    <form onSubmit={handleSubmit}>
                        <label className={styles.muted}>Email Address</label>
                        <input
                            id='emailField'
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // disabled={isSubmitting} // Disable input during submission
                        />
                        <label className={styles.muted}>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // disabled={isSubmitting} // Disable input during submission
                        />
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Continue'}
                        </button>
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
