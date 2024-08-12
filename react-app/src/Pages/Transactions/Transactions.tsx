import React from 'react';
import styles from './Transactions.module.scss';
// logo
import logo from '../Assets/logo.png'
// icons
import verticalDotMenu from '../Assets/dots-vertical.png'
import coinsIcon from '../Assets/coins.png'
import homeIcon from '../Assets/home.png'
import adminIcon from '../Assets/robot.png'
import layersIcon from '../Assets/layers-subtract.png'
// Icons SVG
import VerticalDots from '../../assets/icons/more-vertical-stroke-rounded.svg'
import FilterIcon from '../../assets/icons/FilterIcon.svg'
import SearchIcon from '../../assets/icons/SearchIcon.svg'


function Transactions() {
    return (
        <div className={styles.mainContainer}>

            {/* 
            <div className={styles.sideNaveContainer}>
                {/* top section of the side nav bar 
                <div className={styles.sideNavTopCon}>
                    {/* Logo Container 
                    <div className={styles.sidenavLogoCon}>
                        {/* logo 
                        <div className={styles.logoFill}>
                            <img src={logo} alt="" />
                        </div>
                        {/* title 
                        <h3 className={styles.sidenaveLogoTitle}>Astro</h3>
                    </div>
                    {/* divider Line 
                    <div className={styles.dividerLine}></div>

                    <p className={styles.subtitle}>MAIN</p>

                    {/* Side Nav Options 
                    <div className={styles.sidenavOptionCon}>
                        <div className={styles.sidenavOptionBtn}>
                            {/* icon 
                            <img src={homeIcon} alt="" />
                            {/* title 
                            <h3 className={styles.optionFont}>Overview</h3>
                        </div>
                        <div className={styles.sidenavOptionBtn}>
                            {/* icon 
                            <img src={coinsIcon} alt="coinsIcon" />
                            {/* title 
                            <h3 className={styles.optionFont}>Trade</h3>
                        </div>
                        <div className={styles.sidenavOptionBtn}>
                            {/* icon 
                            <img src={layersIcon} alt="layersIcon" />
                            {/* title 
                            <h3 className={styles.optionFont}>Transactions</h3>
                        </div>
                        <div className={styles.sidenavOptionBtn}>
                            {/* icon 
                            <img src={adminIcon} alt="adminIcon" />
                            {/* title 
                            <h3 className={styles.optionFont}>Admin</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.sideNavBottomCon}>
                    {/* divider Line 
                    <div className={styles.dividerLine}></div>
                    {/* currently logged user data block 
                    <div className={styles.loggedUserCon}>
                        <div className={styles.loggedUserBlock}>
                            {/* logo 
                            <div className={styles.logoFill}></div>
                            <div className={styles.loggedUserTextBlock}>
                                <h1>Name Surname</h1>
                                <p>username@example.co.za</p>
                            </div>
                            {/* the menu Icon 
                            <div>
                                <button className={styles.loggedUserMenuBtn}>
                                    <img src={verticalDotMenu} alt="MenuIcon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            */}


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
                        <button className={styles.filterButton}>
                            <img src={FilterIcon} alt="filter" />
                            Filter
                        </button>
                        {/* search field */}
                        <div className={styles.searchFieldCon}>
                            <img src={SearchIcon} alt="searchIcon" />
                            <input className={styles.filterSearchInput} type="text" placeholder='Search' />
                        </div>
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
                    <div className={styles.innerTableCon}>
                        {/* row of user data */}
                        <div className={styles.contentRowTile}>
                            {/* name data block */}
                            <div className={styles.nameDataBlock}>
                                <div className={styles.userProfilePlacholder}></div>
                                {/* User name data and number data block */}
                                <div className={styles.userNameData}>
                                    <p className={styles.tableText01}>Name Surname</p>
                                    <p className={styles.dataIdNumber}>302442</p>
                                </div>
                            </div>
                            {/* Date data block */}
                            <div className={styles.dateDataBlock}>
                                <p className={styles.tableText01}>11 july 2024</p>
                                <p className={styles.timeData}>At 11:00 pm</p>
                            </div>
                            {/* Amount Data Block */}
                            <div className={styles.amountDataBlock}>
                                <p className={styles.tableText01}>R850.99</p>
                            </div>
                            {/* invoice Id Data Block */}
                            <div className={styles.invoiceDataBlock}>
                                <p>INV34598</p>
                            </div>
                            {/* states data block */}
                            <div className={styles.statusDataBlock}>
                                <p className={styles.positiveText}>Recieved</p>
                            </div>
                            {/* Action data block */}
                            <div className={styles.actionDataBlock}>
                                <button className={styles.detailsBtn}>Details
                                    <img src={VerticalDots} alt="vertical" />
                                </button>
                            </div>
                        </div>

                        {/* row of user data */}
                        <div className={styles.contentRowTile}>
                            {/* name data block */}
                            <div className={styles.nameDataBlock}>
                                <div className={styles.userProfilePlacholder}></div>
                                {/* User name data and number data block */}
                                <div className={styles.userNameData}>
                                    <p className={styles.tableText01}>Name Surname</p>
                                    <p className={styles.dataIdNumber}>302442</p>
                                </div>
                            </div>
                            {/* Date data block */}
                            <div className={styles.dateDataBlock}>
                                <p className={styles.tableText01}>11 july 2024</p>
                                <p className={styles.timeData}>At 11:00 pm</p>
                            </div>
                            {/* Amount Data Block */}
                            <div className={styles.amountDataBlock}>
                                <p className={styles.tableText01}>R850.99</p>
                            </div>
                            {/* invoice Id Data Block */}
                            <div className={styles.invoiceDataBlock}>
                                <p>INV34598</p>
                            </div>
                            {/* states data block */}
                            <div className={styles.statusDataBlock}>
                                <p className={styles.positiveText}>Recieved</p>
                            </div>
                            {/* Action data block */}
                            <div className={styles.actionDataBlock}>
                                <button className={styles.detailsBtn}>Details
                                    <img src={VerticalDots} alt="vertical" />
                                </button>
                            </div>
                        </div>

                        {/* row of user data */}
                        <div className={styles.contentRowTile}>
                            {/* name data block */}
                            <div className={styles.nameDataBlock}>
                                <div className={styles.userProfilePlacholder}></div>
                                {/* User name data and number data block */}
                                <div className={styles.userNameData}>
                                    <p className={styles.tableText01}>Name Surname</p>
                                    <p className={styles.dataIdNumber}>302442</p>
                                </div>
                            </div>
                            {/* Date data block */}
                            <div className={styles.dateDataBlock}>
                                <p className={styles.tableText01}>11 july 2024</p>
                                <p className={styles.timeData}>At 11:00 pm</p>
                            </div>
                            {/* Amount Data Block */}
                            <div className={styles.amountDataBlock}>
                                <p className={styles.tableText01}>R850.99</p>
                            </div>
                            {/* invoice Id Data Block */}
                            <div className={styles.invoiceDataBlock}>
                                <p>INV34598</p>
                            </div>
                            {/* states data block */}
                            <div className={styles.statusDataBlock}>
                                <p className={styles.negativeText}>Withdraw</p>
                            </div>
                            {/* Action data block */}
                            <div className={styles.actionDataBlock}>
                                <button className={styles.detailsBtn}>Details
                                    <img src={VerticalDots} alt="vertical" />
                                </button>
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