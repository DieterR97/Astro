import React, { useState, useEffect } from 'react';
import styles from './Transactions.module.scss';

// logo
import Logo from "../../assets/login/logo.png";
// Icons SVG
import VerticalDots from '../../assets/icons/more-vertical-stroke-rounded.svg'
import FilterIcon from '../../assets/icons/FilterIcon.svg'
import SearchIcon from '../../assets/icons/SearchIcon.svg'
import { useParams } from 'react-router-dom';
// ...
// ...

type FilterOption = 'ALL' | 'LAST_7_DAYS' | 'LAST_30_DAYS' | 'LAST_24_HOURS';
type SortOption = 'TIMESTAMP' | 'AMOUNT' | 'TRANSACTION_ID';

function Transactions() {

    // * recieve the id from the accounts and users tabel
    // const { user_id } = useParams<{ user_id: string }>();

    // useEffect(() => {
    //     if (user_id) {
    //         console.log("User ID from params:", user_id);
    //         // Fetch and display transactions for the user_id
    //     } else {
    //         console.error("User ID is undefined");
    //     }
    //     // console.log("User ID from params:", user_id);
    //     // Fetch and display transactions for the user_id
    // }, [user_id]);

    //recieve the id from the accounts and users tabel
    const { user_id } = useParams<{ user_id: string }>();

    useEffect(() => {
        console.log("User ID from params:", user_id);
        // Fetch and display transactions for the user_id
    }, [user_id]);


    interface Transaction {
        transactions_id: number;
        userName: string;
        from_account_id: number;
        transaction_type: string;
        amount: number;
        timestamp: Date; // Use Date type for timestamps
    }

    interface User {
        user_id: number;
    }

    // TODO : get the username from the account id's
    // TODO : Converting the timestamp to date and time

    // * DUMMY DATA ...............................................................................
    const incomingData: Transaction[] = [
        { transactions_id: 1, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "big", amount: 2500, timestamp: new Date('2024-06-12T12:00:00Z') },
        { transactions_id: 2, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "big", amount: 2500, timestamp: new Date('2024-06-13T12:00:00Z') },
        { transactions_id: 3, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "big", amount: 2500, timestamp: new Date('2024-06-27T12:00:00Z') },
        { transactions_id: 4, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "big", amount: 2500, timestamp: new Date('2024-07-17T12:00:00Z') },
        { transactions_id: 5, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "big", amount: 2500, timestamp: new Date('2024-07-18T12:00:00Z') },
        { transactions_id: 6, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "big", amount: 2500, timestamp: new Date('2024-07-15T12:00:00Z') },
        { transactions_id: 7, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "small", amount: 3000, timestamp: new Date('2024-08-01T09:00:00Z') },
        { transactions_id: 8, userName: 'Test for date sorting', from_account_id: 2, transaction_type: "medium", amount: 500, timestamp: new Date('2024-08-21T15:00:00Z') },
        { transactions_id: 9, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "medium", amount: 5000000, timestamp: new Date('2024-08-22T15:00:00Z') },
        { transactions_id: 10, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "medium", amount: 54500, timestamp: new Date('2024-08-23T15:00:00Z') },
        { transactions_id: 11, userName: 'Ungerer Hattingh', from_account_id: 2, transaction_type: "medium", amount: 67000, timestamp: new Date('2024-08-24T15:00:00Z') },
        { transactions_id: 12, userName: 'Test for date sorting', from_account_id: 2, transaction_type: "medium", amount: 500, timestamp: new Date('2024-08-25T16:40:00Z') },
        { transactions_id: 13, userName: 'Test for date sorting', from_account_id: 2, transaction_type: "medium", amount: 500, timestamp: new Date('2024-08-25T16:45:00Z') },
        { transactions_id: 14, userName: 'Test for date sorting', from_account_id: 4, transaction_type: "medium", amount: 500, timestamp: new Date('2024-08-25T16:45:00Z') },
        { transactions_id: 15, userName: 'Test for date sorting', from_account_id: 4, transaction_type: "medium", amount: 500, timestamp: new Date('2024-08-27T16:45:00Z') },
        { transactions_id: 16, userName: 'Test for date sorting', from_account_id: 2, transaction_type: "medium", amount: 500, timestamp: new Date('2024-08-26T14:45:00Z') },
    ];
    // to change months from numbers to names
    // console.table(incomingData)

    // TODO : If the status = the status value of the data - it must change to according color 
    // Define the color mapping for transaction types
    const transactionTypeColors: { [key: string]: string } = {
        big: 'red',
        medium: 'orange',
        small: 'green',
    };

    // * useStates ....................................................................................
    const [userTransactions, setUserTransactions] = useState<Transaction[]>([]); // the usestate
    const [filterOption, setFilterOption] = useState<FilterOption>('ALL'); // filter useState
    const [sortOptions, setSortOptions] = useState<{ primary: 'timestamp' | 'amount' | 'transactions_id', secondary?: 'timestamp' | 'amount' | 'transactions_id' }>({
        primary: 'timestamp',
        secondary: 'amount'
    });
    // const [sortMethod, setSortMethod] = useState<'timestamp' | 'amount'>('timestamp');
    const [users, setUsers] = useState<User[]>([]);

    // * GET all Transactions for the current logged user .........................................
    // TODO : map all transactions specific to the logged in user 
    // the transactions need to be specific to the user ia
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
    // console.log(userTransactions);



    // * FILTERING FUNCTOINALITY ..................................................................

    const filteredData = (() => {
        const today = new Date();
        switch (filterOption) {
            case 'LAST_24_HOURS':
                const twentyFourHoursAgo = new Date(today.setDate(today.getDate() - 24 / 60 / 60 / 1000)); // 24 hours
                return incomingData.filter(item => new Date(item.timestamp) >= twentyFourHoursAgo);
            case 'LAST_7_DAYS':
                const sevenDaysAgo = new Date(today.setDate(today.getDate() - 7)); // 7 days
                return incomingData.filter(item => new Date(item.timestamp) >= sevenDaysAgo);
            case 'LAST_30_DAYS':
                const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30)); // 30 days
                return incomingData.filter(item => new Date(item.timestamp) >= thirtyDaysAgo);
            case 'ALL':
            default:
                return incomingData;
        }
    })();
    console.log(filteredData.length);


    // * SORTING FUNCTOINALITY ....................................................................
    // 
    const sortData = (data: Transaction[], primary: 'timestamp' | 'amount' | 'transactions_id', secondary?: 'timestamp' | 'amount' | 'transactions_id') => {
        return [...data].sort((b, a) => {
            let comparison = 0;
            // Primary sorting
            // Determines the initial order of items based on the selection.
            if (primary === 'timestamp') {
                comparison = a.timestamp.getTime() - b.timestamp.getTime();
            } else if (primary === 'amount') {
                comparison = a.amount - b.amount;
            } else if (primary === 'transactions_id') {
                comparison = a.transactions_id - b.transactions_id;
            }
            // Secondary sorting
            // If two items are equal based on the primary criterion, this further sorts them based on the secondary criterion.
            if (comparison === 0 && secondary) {
                if (secondary === 'timestamp') {
                    comparison = a.timestamp.getTime() - b.timestamp.getTime();
                } else if (secondary === 'amount') {
                    comparison = a.amount - b.amount;
                } else if (secondary === 'transactions_id') {
                    comparison = a.transactions_id - b.transactions_id;
                }
            }

            return comparison;
        });
    };
    // Combining the filtering functioniality and the sorting functionality into one filtered variable
    // by taking the filteredData, both soted options and puting it all together
    const sortedAndFilteredData = sortData(filteredData, sortOptions.primary, sortOptions.secondary);


    // * OTHER ....................................................................................
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    // Get the current month index (0-11)
    // const currentMonthIndex = currentDate.getMonth();

    // * Details button Modal .....................................................................
    // TODO : the details button
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
                            <button id={styles.allFilterBtn} onClick={() => setFilterOption('ALL')}>
                                <p className={styles.filterOptionText}>All</p>
                            </button>
                        </div>
                        <div className={styles.filterOption}>
                            <button id={styles.thrityDaysFilterBtn} onClick={() => setFilterOption('LAST_30_DAYS')}>
                                {/* {showRecent ? 'Show All Data' : 'Show Data from Last 30 Days'} */}
                                <p className={styles.filterOptionText} >30 Days</p>
                            </button>
                        </div>
                        <div className={styles.filterOption} >
                            <button id={styles.sevenDaysFilterBtn} onClick={() => setFilterOption('LAST_7_DAYS')}>
                                <p className={styles.filterOptionText} >7 Days</p>
                            </button>
                        </div>
                        <div className={styles.filterOption04}>
                            <button id={styles.twentyFourHoursFilterBtn} onClick={() => setFilterOption('LAST_24_HOURS')}>
                                <p className={styles.filterOptionText}>24 Hours</p>
                            </button>
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
                                <button onClick={() => setSortOptions({ primary: 'timestamp', secondary: 'amount' })}>By Date </button>
                                <button onClick={() => setSortOptions({ primary: 'transactions_id', secondary: 'amount' })}>By ID</button>
                                <button onClick={() => setSortOptions({ primary: 'amount', secondary: 'timestamp' })}>By Amount</button>
                                <button value={""}>By Invoice</button>
                                <button value={"byStatus"}>By Status</button>
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
                    {/* TOP ROW COLUMNS */}
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
                        {/* // * row of user data */}
                       
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

                        <p>Testing Dummy data below:</p>

                        {/* // * MAPPING FROM DUMMY DATA -------------------------------------------------------------- */}
                        {sortedAndFilteredData && sortedAndFilteredData.length > 0 ? (
                            sortedAndFilteredData.map(transaction => (
                                <div key={transaction.transactions_id} className={styles.contentRowTile}>
                                    {/* name data block */}
                                    <div className={styles.nameDataBlock}>
                                        <div className={styles.userProfilePlacholder}></div>
                                        {/* User name data and number data block */}
                                        <div className={styles.userNameData}>
                                            <p className={styles.tableText01}>{transaction.userName}</p>
                                            <p className={styles.dataIdNumber}>{transaction.transactions_id}</p>
                                        </div>
                                    </div>
                                    {/* Date data block */}
                                    <div className={styles.dateDataBlock}>
                                        <div className={styles.transactionDateBlock}>
                                            <p className={styles.tableText01}>{transaction.timestamp.getDate()} :</p>
                                            <p className={styles.tableText01}>{transaction.timestamp.getMonth()} :</p>
                                            <p className={styles.tableText01}>{transaction.timestamp.getFullYear()}</p>
                                        </div>
                                        <div className={styles.timeDataBlock}>
                                            <p className={styles.timeData}>At {transaction.timestamp.getHours()} : </p>
                                            <p className={styles.timeData}>{transaction.timestamp.getMinutes()}</p>
                                        </div>
                                    </div>
                                    {/* Amount Data Block */}
                                    <div className={styles.amountDataBlock}>
                                        <p className={styles.tableText01}>R{transaction.amount}</p>
                                    </div>
                                    {/* invoice Id Data Block */}
                                    <div className={styles.invoiceDataBlock}>
                                        <p>INV34598</p>
                                    </div>
                                    {/* states data block */}
                                    <div className={styles.statusDataBlock}>
                                        <p className={styles.positiveText}>{transaction.transaction_type}</p>
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