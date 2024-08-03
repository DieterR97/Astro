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

                </div>
            </div> 

        </div>
    )
}

export default Admin;