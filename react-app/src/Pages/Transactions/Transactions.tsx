import React from 'react';
import styles from './Transactions.module.scss';

function Transactions() {
    return (
        <div className={styles.mainContainer}>
            {/* Side nav bar start */}
            <div className={styles.sideNaveContainer}>
                {/* Logo Container */}
                <div className={styles.sidenavLogoCon}>
                    {/* logo */}
                    <div className={styles.logoFill}></div>
                    {/* title */}
                    <h3 className={styles.sidenaveLogoTitle}>Astro</h3>
                </div>
                {/* divider Line */}
                <div className={styles.dividerLine}></div>

                <p className={styles.subtitle}>MAIN</p>

                {/* Side Nav Options */}
                <div className={styles.sidenavOptionCon}>
                    <div className={styles.sidenavOptionBtn}>
                        {/* icon */}
                        {/* title */}
                        <h3 className={styles.optionFont}>Overview</h3>
                    </div>
                    <div className={styles.sidenavOptionBtn}>
                        {/* icon */}
                        {/* title */}
                        <h3 className={styles.optionFont}>Trade</h3>
                    </div>
                    <div className={styles.sidenavOptionBtn}>
                        {/* icon */}
                        {/* title */}
                        <h3 className={styles.optionFont}>Transactions</h3>
                    </div>
                    <div className={styles.sidenavOptionBtn}>
                        {/* icon */}
                        {/* title */}
                        <h3 className={styles.optionFont}>Admin</h3>
                    </div>
                </div>
                {/* divider Line */}
                <div className={styles.dividerLine}></div>
                {/* currently logged user data block */}
                <div className={styles.loggedUserCon}>
                    <div className={styles.loggedUserBlock}>
                        {/* logo */}
                        <div className={styles.logoFill}></div>
                        <div className={styles.loggedUserTextBlock}>
                            <h1>Name Surname</h1>
                            <p>username@example.co.za</p>
                        </div>
                        {/* the menu Icon */}
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* side nav bar end */}

            {/* The Content Container */}
            <div className={styles.contentContainer}>
                <h1>Transactions</h1>
                {/* filter section START */}
                <div className={styles.filterContainer}>
                    {/* filter bar */}
                    <div className={styles.filterBar}>
                        <div className={styles.filterOption01}>
                            <p className={styles.filterOptionText}>All</p>
                        </div>
                        <div className={styles.filterOption}>
                            <p className={styles.filterOptionText}>30 Days</p>
                        </div>
                        <div className={styles.filterOption}>
                            <p className={styles.filterOptionText}>7 Days</p>
                        </div>
                        <div className={styles.filterOption04}>
                            <p className={styles.filterOptionText}>24 Hours</p>
                        </div>
                    </div>
                    {/* other options group */}
                    <div className={styles.secondaryFilterCon}>
                        {/* filter button */}
                        <button className={styles.filterButton}>Filter</button>
                        {/* search field */}
                        <input className={styles.filterSearchInput} type="text" placeholder='Search' />
                    </div>
                </div>
                {/* filter section END */}

                {/* Transactions Table  */}
                <div className={styles.transactionTableMianCon}>
                    <div className={styles.tableTopRow}>
                        <p>Name</p>
                        <p>Date</p>
                        <p>Amount</p>
                        <p>Invoice ID</p>
                        <p>Status</p>
                        <p>Action</p>
                    </div>
                    {/* divider Line */}
                    <div className={styles.dividerLine02}></div>
                    {/* Content */}
                    <div>
                        {/* row */}
                        <div className={styles.contentRowTile}>
                            {/* name data block */}
                            <div className={styles.nameDataBlock}>
                                <div className={styles.userProfilePlacholder}></div>
                                {/* User name data and number data block */}
                                <div className={styles.userNameData}>
                                    <p className={styles.dataUsername}>Name Surname</p>
                                    <p className={styles.dataIdNumber}>302442</p>
                                </div>
                            </div>
                            {/* Date data block */}
                            <div className={styles.dateDataBlock}>
                                <p className={styles.dateData}>11 july 2024</p>
                                <p className={styles.timeData}>At 11:00 pm</p>
                            </div>
                            {/* Amount Data Block */}
                            <div className={styles.amountDataBlock}>
                                <p>R850.99</p>
                            </div>
                            {/* invoice Id Data Block */}
                            <div className={styles.invoiceDataBlock}>
                                <p>INV34598</p>
                            </div>
                            {/* states data block */}
                            <div className={styles.statusDataBlock}>
                                <p>Recieved</p>
                            </div>
                            {/* Action data block */}
                            <div className={styles.actionDataBlock}>
                                <button>Details</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <h1>hello</h1> */}
        </div>
    )
}

export default Transactions;