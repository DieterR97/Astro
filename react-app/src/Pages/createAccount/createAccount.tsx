import React from 'react';
import styles from './createAccountStyle.module.scss';
import logo from '../../assets/login/logo.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const handleCreationClick = () => {
        navigate('/Authentication');
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_card}>
                <div className={styles.signup_left}>
                    <div className={styles.signup_logo}>
                        <img src={logo} alt="Logo" />
                    </div>
                    <br />
                    <h1>Create an Account!</h1>
                    <p className={styles.muted}>Provide your details so we can continue to your crypto adventure!</p>
                    <br />
                    <form>
                        <label className={styles.muted}>Your Full Name*</label>
                        <input type="text" placeholder="Enter your name" />
                        <label className={styles.muted}>Email Address</label>
                        <input type="email" placeholder="Enter your email" />
                        <label className={styles.muted}>Create password</label>
                        <input type="password" placeholder="Create a password" />
                        {/* <div className={styles.checkbox_container}>
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms" className={styles.muted}>I agree to terms and conditions.</label>
                        </div> */}
                        <div className={styles.checkbox_container}>
                            <input type="checkbox" id="terms" className={styles.checkbox} />
                            <label htmlFor="terms" className={styles.label}>I agree to terms and conditions.</label>
                        </div>
                        <button type="submit" onClick={handleCreationClick}>Continue</button>
                    </form>
                    <br />
                    <p className={styles.signup_link}><span className={styles.muted}> Already have an account? </span><a href="/">Login</a></p>
                </div>
                <div className={styles.signup_right}></div>
            </div>
        </div>
    );
}

export default Signup;