import React from 'react';
import styles from './loginStyle.module.scss';
import logo from '../../assets/login/logo.png';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/Authentication');
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.login_card}>
                <div className={styles.login_left}>
                    <br />
                    <div className={styles.login_logo}>
                        <img src={logo} alt="Logo" />
                    </div>
                    <br />
                    <h1>Welcome back!</h1>
                    <p className={styles.muted}>Provide your details so we can continue to your crypto adventure!</p>
                    <br />
                    <form>
                        <label className={styles.muted}>Email Address</label>
                        <input type="email" placeholder="Enter your email" />
                        <label className={styles.muted}>Password</label>
                        <input type="password" placeholder="Enter your password" />
                        <button type="submit" onClick={handleLoginClick}>Continue</button>
                    </form>
                    <br />
                    <p className={styles.register_link}><span className={styles.muted}>Don’t have an account? </span><a href="/SignUp">Register</a></p>
                </div>
                <div className={styles.login_right}></div>
            </div>
        </div>
    );
}


export default LoginPage;
