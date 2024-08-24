import React, { useState, useEffect } from 'react';
import styles from './Transactions.module.scss';

// logo
import Logo from "../../assets/login/logo.png";
// icons
import coinsIcon from '../Assets/coins.png'
import homeIcon from '../Assets/home.png'
import adminIcon from '../Assets/robot.png'
import layersIcon from '../Assets/layers-subtract.png'
// Icons SVG
import VerticalDots from '../../assets/icons/more-vertical-stroke-rounded.svg'
import FilterIcon from '../../assets/icons/FilterIcon.svg'
import SearchIcon from '../../assets/icons/SearchIcon.svg'
// ...
// ...
// {
//     "$id": "4",
//     "user_id": 3,
//     "username": "UngererHattingh",
//     "email": "221302@virtualwindow.co.za",
//     "role": "user",
//     "created_at": "2024-08-24T07:02:33.225092Z",
//     "otp": "591138",
//     "otpExpiry": "2024-08-24T07:07:33.545741Z",
//     "authentication_logs": null,
//     "user_security": null,
//     "account": null
//   }


function Transactions() {


    interface Transaction {
        transactions_id: number;
        transaction_type: string;
        amount: number;
        timestamp: Date; // Use Date type for timestamps
    }

    // TODO : If the = the value it must change to according color 


    const incomingData: Transaction[] = [
        { transactions_id: 1, transaction_type: "big", amount: 300, timestamp: new Date('2024-08-19T12:00:00Z') },
        { transactions_id: 2, transaction_type: "big", amount: 300, timestamp: new Date('2024-08-19T09:00:00Z') },
        { transactions_id: 3, transaction_type: "big", amount: 300, timestamp: new Date('2024-08-19T15:00:00Z') }
    ];

    // Process and sort the data
    const sortedData = defualtSortingByDate(incomingData);
    // console.log(sortedData);


    // TODO : the details button
    // * Details button Modal
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const openModal = () => {
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };
    // const openDetailsModal = (event: React.MouseEvent<HTMLDivElement>) => {
    //     // Close the modal if the user clicks on the overlay (outside the modal content)
    //     if (event.target === event.currentTarget) {
    //         closeModal();
    //     }
    // };


    // TODO : map all transactions specific to the logged in user 
    // * to fetch all the transactions
    const [userTransactions, setUserTransactions] = useState<Transaction[]>([]);
    // const [transactionAmount, setTransactionAmount] = useState();

    var url = "http://localhost:5122/api/Transaction"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("transaction fetched: ", data);
                setUserTransactions(data.$values);
            })
            .catch(error => {
                console.log("Error Fetching Data: ", error);
            });
    }, []);
    console.log(userTransactions);


    // TODO : by defualt must be sorted by date
    function defualtSortingByDate(data: Transaction[]): Transaction[] {
        return data.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    }


    // TODO : filtering function for all - 7days - 24Hours 
    const filterRecentData = (items: Transaction[]): Transaction[] => {
        const now = new Date();
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30)); // 30 days
        const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7)); // 7 days
        // Filter transactions from the past 24 hours
        const twentyFourHoursAgo = new Date(now.setDate(now.getDate() - 24 * 60 * 60 * 1000)); // 24 hours

        return items.filter(item => {
            const itemDate = new Date(item.timestamp);
            return itemDate >= thirtyDaysAgo;
        });
    };

    // TODO : sorting functionality 
    // soring options like : by name - by amount - by date - by status 
    const filterAndSortTransactions = (items: Transaction[]): Transaction[] => {
        const now = new Date();
    
        // Filter transactions from the past 24 hours
        const recentTransactions = items.filter(item => {
          const itemDate = new Date(item.timestamp); // TODO : Timestamps need to be sorted into date and
          return itemDate ;
        });
    
        // Sort transactions by amount in descending order
        return recentTransactions.sort((a, b) => b.amount - a.amount);
      };
    


    // ...

    return (
        <div className={styles.mainContainer}>
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
                            <p className={styles.filterOptionText} onClick={function () { }}>7 Days</p>
                        </div>
                        <div className={styles.filterOption04}>
                            <p className={styles.filterOptionText}>24 Hours</p>
                        </div>
                    </div>
                    {/* other options group */}
                    <div className={styles.secondaryFilterCon}>
                        {/* filter button */}
                        <div className={styles.dropDownMenu}>
                            <button className={styles.filterButton}>
                                <img src={FilterIcon} alt="filter" />
                                Filter
                            </button>
                            <div className={styles.dropDownContent}>
                                <button>By Date </button>
                                <button>By Name</button>
                                <button>By Amount</button>
                                <button>By Invoice</button>
                                <button>By Status</button>
                            </div>
                        </div>

                        {/* search field */}
                        <div className={styles.searchFieldCon}>
                            <img src={SearchIcon} alt="searchIcon" />
                            <input className={styles.filterSearchInput} type="text" placeholder='Search...' />
                        </div>
                    </div>
                </div>
                {/* filter section END */}

                <h1>Your Transactions</h1>

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
                                    <p className={styles.tableText01}>Name Surname{ }</p>
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
                                <button className={styles.detailsBtn} value="Get Models">Details
                                    <img src={VerticalDots} alt="vertical" />
                                </button>

                            </div>
                        </div>

                        {/* <li key={Transactions.id}>
                            {transaction.name}
                        </li> */}

                        {/* row of user data */}
                        {/* map testing */}
                        {userTransactions && userTransactions.length > 0 ? (
                            userTransactions.map(transaction => (
                                <div className={styles.contentRowTile}>
                                    {/* name data block */}
                                    <div className={styles.nameDataBlock}>
                                        <div className={styles.userProfilePlacholder}></div>
                                        {/* User name data and number data block */}
                                        <div className={styles.userNameData}>
                                            <p className={styles.tableText01}>Name Surname</p>
                                            <p className={styles.dataIdNumber}>{transaction.transactions_id}</p>
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
                            ))) : (
                            <p>No transactions Found</p>
                        )}

                    </div>
                </div>
            </div>
            {/* <h1>hello</h1> */}
        </div>
    )
}

export default Transactions;