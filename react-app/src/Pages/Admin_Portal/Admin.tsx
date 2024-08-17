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
    Otp: string;
    created_at: string;
  }

function Admin() {

    const [users, setUsers] = useState<User[]>([]); // Initialize state to store fetched data

    var url = "http://localhost:5122/api/User"

    // fetch(url)
    //     .then(response => response.json()) // Convert response to JSON
    //     .then(data => {
    //         // Now 'data' is a JavaScript object
    //         const jsonString = JSON.stringify(data); // Convert object to JSON string
    //         console.log(jsonString); // Output the JSON string
    //     })
    //     .catch(error => console.error('Error fetching data:', error));

    useEffect(() => {
        fetch(url)
            .then(response => response.json()) // Convert response to JSON
            .then((data: User[]) => {
                
                console.log('Fetched data:', data);
                setUsers(data); // Store the data in state
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array to run once on component mount

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

                        {users.length > 0 ? (
                            users.map(user => (
                            <div className={styles.admin_card_two} key={user.user_id}>
                                <img src={img3} alt="Logo" className={styles.image2} />
                                <div className={styles.name_box}>
                                    <p className={styles.paragraph_six}>{user.username}</p>
                                    <p className={styles.paragraph_seven}>{user.Otp}</p>
                                </div>
                                <div className={styles.join_date_box}>
                                    <p className={styles.paragraph_six}>{new Date(user.created_at).toLocaleDateString()}</p>
                                    <p className={styles.paragraph_seven}>{new Date(user.created_at).toLocaleDateString()}</p>
                                </div>
                                <p className={styles.paragraph_eight}>{user.user_id}</p>
                                <p className={styles.paragraph_nine}>Inactive</p>
                                <p className={styles.body_three}>
                                    Details
                                    <img src={img4} alt="Logo" className={styles.image3} />
                                </p>
                            </div>
                        ))) : (
                            <p className={styles.paragraph}>No users found.</p>
                        )}

                        <div className={styles.admin_card_two}>
                            <img src={img3} alt="Logo" className={styles.image2} />
                            <div className={styles.name_box}>
                                <p className={styles.paragraph_six}>Name Surname</p>
                                <p className={styles.paragraph_seven}>302442</p>
                            </div>
                            <div className={styles.join_date_box}>
                                <p className={styles.paragraph_six}>11 July 2024</p>
                                <p className={styles.paragraph_seven}>At 11:00 PM</p>
                            </div>
                            <p className={styles.paragraph_eleven}>32142</p>
                            <p className={styles.paragraph_ten}>Inactive</p>
                            <p className={styles.body_four}>
                                Details
                                <img src={img4} alt="Logo" className={styles.image3} />
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Admin;