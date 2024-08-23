import React, { useEffect, useState } from 'react';
import styles from './Admin.module.scss'
import img from '../Assets/Filter_Option.png';
import img2 from '../Assets/Search_Option.png';
import img3 from '../Assets/Purple_Circle.png';
import img4 from '../Assets/More_Option.png';

// To define the shape of a User object
interface User {
    user_id: number;
    username: string;
    otp: string;
    created_at: string;
}

interface Status {
    active: boolean;
    balance: number;
}

function Admin() {

    const [users, setUsers] = useState<User[]>([]); // Initialize state to store fetched data

    const [status, setStatus] = useState<Status[]>([]);

    var url = "http://localhost:5122/api/User";

    var url2 = "http://localhost:5122/api/Account";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data); 
                setUsers(data.$values); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        fetch(url2)
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);
            setStatus(data.$values);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    console.log("Users" + users); //Test

    return (
        <div className={styles.adminMainContainer}>
            <div className={styles.admin_container}>
                <div>
                    <h1 className={styles.main_head}>Admin</h1>
                    <h2 className={styles.sub_head}>User</h2>

                    <div className={styles.admin_container_two}>
                        <h4 className={styles.body}>
                            <img src={img} alt="Logo" className={styles.image} />
                            Filter
                        </h4>
                        <h4 className={styles.body_two}>
                            <img src={img2} alt="Logo" className={styles.image} />
                            Search
                        </h4>
                    </div>

                    <div className={styles.admin_card}>
                        <div className={styles.admin_container_three}>
                            <p className={styles.paragraph}>Name</p>
                            <p className={styles.paragraph_two}>Join Date</p>
                            <p className={styles.paragraph_three}>User ID</p>
                            <p className={styles.paragraph_four}>Status</p>
                            <p className={styles.paragraph_five}>Action</p>
                        </div>

                        {users && users.length > 0 ? (
                            users.map(user => (
                            <div className={styles.admin_card_two} key={user.user_id}>
                                <img src={img3} alt="Logo" className={styles.image2} />
                                <div className={styles.name_box}>
                                    <p className={styles.paragraph_six}>{user.username}</p>
                                    <p className={styles.paragraph_seven}>{user.otp}</p>
                                </div>
                                <div className={styles.join_date_box}>
                                    <p className={styles.paragraph_six}>{new Date(user.created_at).toLocaleDateString()}</p>
                                    <p className={styles.paragraph_seven}>{new Date(user.created_at).toLocaleTimeString()}</p>
                                </div>
                                <p className={styles.paragraph_eight}>{user.user_id}</p>
                                <div className={styles.box}></div>
                                {status && status.length > 0 ? (
                                    status.map(status => (
                                        <p className={styles.paragraph_nine}>{status.balance}</p>
                                    ))
                                ): (
                                    <p className={styles.paragraph}>Loading......</p>
                                )}

                                {/* <p className={styles.paragraph_nine}>Active</p> */}
                                
                                <p className={styles.body_three}>
                                    Details
                                    <img src={img4} alt="Logo" className={styles.image3} />
                                </p>
                            </div>
                        ))) : (
                            <p className={styles.paragraph}>Loading......</p>
                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Admin;