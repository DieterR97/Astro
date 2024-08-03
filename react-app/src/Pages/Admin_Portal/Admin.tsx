import React from 'react';
import styles from './Admin.module.scss'

function Admin() {
    return (
        <div className={styles.admin_container}>
            <div>
                <h1 className={styles.main_head}>Admin</h1>
                <h2 className={styles.sub_head}>User</h2>

                <div className={styles.admin_container_two}>
                    <h4 className={styles.body}>Filter</h4>
                    <h4 className={styles.body_two}>Search</h4>
                </div>
                
                <div className={styles.admin_card}>
                    <div className={styles.admin_container_three}>
                        <p className={styles.paragraph}>Name</p>
                        <p className={styles.paragraph_two}>Join Date</p>
                        <p className={styles.paragraph_three}>User ID</p>
                        <p className={styles.paragraph_four}>Status</p>
                        <p className={styles.paragraph_five}>Action</p>
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default Admin;