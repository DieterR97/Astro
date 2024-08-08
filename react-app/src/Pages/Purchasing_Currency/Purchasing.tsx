import React, { useState } from 'react';
import styles from './Purchasing.module.scss';
import Navbar from '../../Components/Navbar/Navbar';
import SwitchIcon from "../../assets/icons/SwitchIcon.svg";
import SwitchIcon_black from "../../assets/icons/SwitchIcon_black.svg";
import CheckIcon from "../../assets/icons/CheckIcon.svg";

function Purchasing() {

    const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Close the modal if the user clicks on the overlay (outside the modal content)
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    return (
        <>

            {/* <Navbar></Navbar> */}

            <div className={styles.header}>
                <div className={styles.coinIcon}></div>
                <h1 className={styles.coinName}>Coin name</h1>
            </div>

            <div className={styles.testAlignment}>


                <div className={styles.purchasingContainer}>


                    {/* <div className={styles.header}>
                        <div className={styles.coinIcon}></div>
                        <h1 className={styles.coinName}>Coin name</h1>
                    </div> */}


                    <div className={styles.mainContent}>
                        <div className={styles.marketData}>
                            <div className={styles.marketPrice}>
                                <div className={styles.price}>R123,203.00</div>
                                <div className={styles.priceChange}>+2.42%</div>
                                <div className={styles.timeRange}>
                                    <div className={styles.buttonBox}>
                                        <button>12 Months</button>
                                    </div>
                                    <div className={styles.buttonBox}>
                                        <button>30 Days</button>
                                    </div>
                                    <div className={styles.buttonBox}>
                                        <button>7 Days</button>
                                    </div>
                                    <div className={styles.buttonBox}>
                                        <button>24 Hours</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.graph}>GRAPH</div>
                        </div>
                    </div>


                    <div className={styles.marketInfo}>
                        <h2>Coin Market Information</h2>
                        <div className={styles.infoRow}>

                            <div className={styles.infoCard}>
                                <div className={styles.coinIcon}></div>
                                <div className={styles.infoCardInfo}>
                                    <div>Popularity</div>
                                    <br />
                                    <div className={styles.muted}>Info</div>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.coinIcon}></div>
                                <div className={styles.infoCardInfo}>
                                    <div>Title</div>
                                    <br />
                                    <div className={styles.muted}>Info</div>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.coinIcon}></div>
                                <div className={styles.infoCardInfo}>
                                    <div>Popularity</div>
                                    <br />
                                    <div className={styles.muted}>Info</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.infoRow}>

                            <div className={styles.infoCard}>
                                <div className={styles.coinIcon}></div>
                                <div className={styles.infoCardInfo}>
                                    <div>Popularity</div>
                                    <br />
                                    <div className={styles.muted}>Info</div>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.coinIcon}></div>
                                <div className={styles.infoCardInfo}>
                                    <div>Title</div>
                                    <br />
                                    <div className={styles.muted}>Info</div>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.coinIcon}></div>
                                <div className={styles.infoCardInfo}>
                                    <div>Popularity</div>
                                    <br />
                                    <div className={styles.muted}>Info</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.performance}>
                        <div className={styles.performance_row}>
                            <div className={styles.performance_row_1}>
                                <h2>Performance</h2>
                                <div className={styles.muted}>Updated on July 24 2024 11:00</div>
                            </div>
                            <div className={styles.performanceChange}>Coin <span>+2.42%</span></div>
                        </div>
                    </div>

                    <div className={styles.aboutCoin}>
                        <h2>About Coin</h2>
                        <p className={styles.muted}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa </p>
                    </div>
                </div>






                <div className={styles.container}>
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'buy' ? styles.active : ''}`}
                            onClick={() => setActiveTab('buy')}
                        >
                            Buy
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'sell' ? styles.active : ''}`}
                            onClick={() => setActiveTab('sell')}
                        >
                            Sell
                        </button>
                    </div>

                    {activeTab === 'buy' ? (
                        <div className={styles.card}>
                            <div className={styles.row}>
                                <span>You Pay</span>
                                <input type="number" className={styles.input} placeholder="0.00" />
                                <div className={styles.dropdownWrapper}>
                                    <span className={styles.circle}></span>
                                    <select className={styles.dropdown}>
                                        <option>CWD</option>
                                        <option>BTC</option>
                                        <option>CWN</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className={`${styles.swapIcon} rotate-90`}>&#8646;</div> */}
                            <div className={styles.IconContainerParent}>
                                <div className={styles.IconContainer}>
                                    <img className={styles.swapIcon} alt="Frame" src={SwitchIcon_black} />
                                </div>
                            </div>
                            <div className={styles.row2}>
                                <span>You Get</span>
                                <input type="number" className={styles.input} placeholder="0.00" />
                                <div className={styles.dropdownWrapper}>
                                    <span className={styles.circle}></span>
                                    <select className={styles.dropdown}>
                                        <option>CWD</option>
                                        <option>BTC</option>
                                        <option>CWN</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.card}>

                            <div className={styles.balance}>
                                Available balance
                                <span className={styles.balanceAmount}>1.23 CWN</span>
                                <div className={styles.dropdownWrapper}>
                                    <span className={styles.circle}></span>
                                    <select className={styles.dropdown}>
                                        <option>CWD</option>
                                        <option>BTC</option>
                                        <option>CWN</option>
                                    </select>
                                </div>
                            </div>

                            <hr className={styles.hrAfterBalance} />
                            {/* <br /> */}

                            <div className={styles.row}>
                                <span>I want to sell</span>
                                <input type="number" className={styles.input} placeholder="0.00" />
                                <div className={styles.dropdownWrapper}>
                                    <span className={styles.circle}></span>
                                    <select className={styles.dropdown}>
                                        <option>CWD</option>
                                        <option>BTC</option>
                                        <option>CWN</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className={styles.swapIcon}>&#8646;</div> */}
                            <div className={styles.IconContainerParent}>
                                <div className={styles.IconContainer}>
                                    <img className={styles.swapIcon} alt="Frame" src={SwitchIcon_black} />
                                </div>
                            </div>
                            <div className={styles.row2}>
                                <span>I want to get</span>
                                <input type="number" className={styles.input} placeholder="0.00" />
                                <div className={styles.dropdownWrapper}>
                                    <span className={styles.circle}></span>
                                    <select className={styles.dropdown}>
                                        <option>CWD</option>
                                        <option>BTC</option>
                                        <option>CWN</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    <button className={styles.continueButton} onClick={openModal}>Continue</button>
                </div>


            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={handleOverlayClick}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <span>Confirm Transaction</span>
                            <button className={styles.closeButton} onClick={closeModal}>
                                &times;
                            </button>
                        </div>
                        <div className={styles.modalContent}>
                            <div className={styles.IconContainer2}>
                                <img className={styles.swapIcon2} alt="Frame" src={SwitchIcon} />
                            </div>
                            <div className={styles.transactionDetails}>
                                <p className={styles.p1}>You will receive</p>
                                <h3>R500 / 2.2 CWN</h3>
                                <hr className={styles.hr} />
                                <div className={styles.transactionBreakdown}>
                                    <div className={styles.transactionBreakdownLeft}>
                                        <p>Sell</p>
                                        <p>Receive</p>
                                        <p>Fee 2%</p>
                                    </div>
                                    <div className={styles.transactionBreakdownRight}>
                                        <p>0.3 CWM</p>
                                        <p>R500</p>
                                        <p>R10</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.paymentMethod}>
                                <p>Receive / Pay with</p>
                                <div className={styles.paymentOption}>
                                    <div className={styles.card}>
                                        <div className={styles.toggleContainer}>
                                            <div className={styles.toggle}></div>
                                        </div>
                                        <div className={styles.cardInfo}>
                                            <span>Mastercard</span>
                                            <p>XXXX</p>
                                        </div>
                                    </div>
                                    {/* <div className={styles.checkmark}>&#10003;</div> */}
                                    <img className={styles.swapIcon} alt="Frame" src={CheckIcon} />
                                </div>
                            </div>
                            <button className={styles.confirmButton}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default Purchasing;