import React from 'react';
import styles from './Admin.module.scss'
import img from '../Assets/Filter_Option.png';
import img2 from '../Assets/Search_Option.png';
import img3 from '../Assets/Purple_Circle.png';
import img4 from '../Assets/More_Option.png';

function Admin() {
    return (
        <div className={styles.admin_container}>
            <div>
                <h1 className={styles.main_head}>Admin</h1>
                <h2 className={styles.sub_head}>User</h2>

                <div className={styles.admin_container_two}>
                    <h4 className={styles.body}>
                        <img src={img} alt="Logo" className={styles.image}/>
                        Filter
                    </h4>
                    <h4 className={styles.body_two}>
                        <img src={img2} alt="Logo" className={styles.image}/>
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

                    <div className={styles.admin_card_two}>
                        <img src={img3} alt="Logo" className={styles.image2}/>
                        <div className={styles.name_box}>
                            <p className={styles.paragraph_six}>Name Surname</p>
                            <p className={styles.paragraph_seven}>302442</p>
                        </div>
                        <div className={styles.join_date_box}>
                            <p className={styles.paragraph_six}>11 July 2024</p>
                            <p className={styles.paragraph_seven}>At 11:00 PM</p>
                        </div>
                        <p className={styles.paragraph_eight}>32142</p>
                        <p className={styles.paragraph_nine}>Active</p>
                        <p className={styles.body_three}>
                            Details
                            <img  src={img4} alt="Logo" className={styles.image3}/>
                        </p>
                    </div>

                    <div className={styles.admin_card_two}>
                        <img src={img3} alt="Logo" className={styles.image2}/>
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
                            <img  src={img4} alt="Logo" className={styles.image3}/>
                        </p>
                    </div>

                </div>
            </div> 

        </div>
    )
}

export default Admin;