import React from 'react';
import styles from './authenticationStyle.module.scss';
import logo from '../../assets/login/logo.png';

const Authentication = () => {
    return (
        <div className={styles.authentication_container}>
            <div className={styles.authentication_card}>
                <div className={styles.authentication_left}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Logo" />
                    </div>
                    <br />
                    <h1>Hold on! Let's first verify.</h1>
                    <p className={styles.muted}>Please enter the OTP code we sent to your email to proceed.</p>
                    <br />
                    <form>
                        {/* <label htmlFor="pin" className={styles.muted}>Enter pin</label> */}
                        <input type="text" id="pin" placeholder="Enter pin" />
                        <button type="button" className={styles.send_again}>Send again</button>
                        <button type="submit" className={styles.continue}>Continue</button>
                    </form>
                </div>
                <div className={styles.authentication_right}></div>

            </div>
        </div>
    );
};

export default Authentication;