import React, { useEffect, useState } from "react";
import {
  Banner,
  AssetComponent,
  AssetRow,
  TransactionRow,
} from "./Components/OverviewComponents";
import styles from "./Overview.module.scss";
import FilterIcon from "../../assets/icons/FilterIcon.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import TempImage from "../../assets/login/logo.png";
import { Account, User, Status } from "../../Models/models";

const Overview: React.FC = () => {
  const [account, setAccount] = useState<Account | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<Status[]>([]);

  useEffect(() => {
    const email = localStorage.getItem("email_to_validate");
    if (!email) {
      setError("No email found");
      setLoading(false);
      return;
    }

    const url = `http://localhost:5122/api/User/email?email=${encodeURIComponent(
      email
    )}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch account details");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setAccount(data.account);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.toString());
        setLoading(false);
      });

    // Fetch all statuses
    fetch("http://localhost:5122/api/Status")
      .then((response) => response.json())
      .then((data) => setStatuses(data.$values))
      .catch((err) => console.error("Error fetching statuses:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleUpgrade = (newStatusId: number) => {
    if (user) {
      const accountId = account?.accountId;

      fetch(`http://localhost:5122/api/Account/upgradeStatus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accountId, newStatusId }),
      })
        .then((response) => {
          if (response.ok) {
            setUser((prev) =>
              prev
                ? {
                    ...prev,
                    account: {
                      ...prev.account,
                      account_status_id: newStatusId,
                    },
                  }
                : null
            );
          } else {
            throw new Error("Failed to upgrade account status");
          }
        })
        .catch((err) => console.error("Error upgrading account status:", err));
    }
  };

  console.log(account);
  console.log(statuses);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.overview}>
      {user && (
        <Banner user={user} statuses={statuses} onUpgrade={handleUpgrade} />
      )}
      <div className={styles["text-title"]}>Overview</div>

      <div className={styles.filterContainer}>
        <div className={styles.filterBar}>{/* Filter options */}</div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.portfolio}>
          <div className={styles["title"]}>Portfolio</div>
          <div className={styles["value"]}>
            {account ? `R${account.balance.toFixed(2)}` : "R0.00"}
          </div>
          <div className={styles.graph}>GRAPH</div>
        </div>

        <div className={styles.assets}>
          <div className={styles["title"]}>Top Assets</div>
          <div className={styles.assetsList}>
            {account && Array.isArray(account.assets.$values) ? (
              account.assets.$values
                .slice(0, 2)
                .map((asset) => (
                  <AssetComponent key={asset.asset_id} {...asset} />
                ))
            ) : (
              <p>No assets to display</p>
            )}
          </div>
        </div>
      </div>

      <div className={styles.assetTable}>
        <div className={styles.secondaryFilterCon}>
          {/* Search and filter */}
        </div>
      </div>

      <div className={styles.AssetTransactionContainer}>
        <div className={styles.assetTableContainer}>
          <div className={styles.titles}>
            <div className={styles.title}>Asset</div>
            <div className={styles.title}>Price</div>
            <div className={styles.title}>Balance</div>
            <div className={styles.title}>Proportion</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.rows}>
            {account && Array.isArray(account.assets.$values) ? (
              account.assets.$values.map((asset) => (
                <AssetRow
                  key={asset.asset_id}
                  image={TempImage}
                  name={asset.name}
                  price={`R${asset.price.toFixed(2)}`}
                  balance={`R${(asset.price * asset.tokens).toFixed(2)}`}
                  proportion={`${(
                    ((asset.price * asset.tokens) / account.balance) *
                    100
                  ).toFixed(2)}%`}
                  abbreviation={asset.abbreviation}
                />
              ))
            ) : (
              <p>No assets to display</p>
            )}
          </div>
        </div>

        <div className={styles.transactionTable}>
          <div className={styles.transactionTitle}>
            <div className={styles.title}>Recent Transactions</div>
          </div>
          <div className={styles.transactionTableContainer}>
            <TransactionRow
              icon={TempImage}
              transactionType="DUMMY"
              date="Jul 25 2024 11:00"
              amount="+R230.00"
            />
            {account && Array.isArray(account.transactions.$values) ? (
              account.transactions.$values.map((transaction) => (
                <TransactionRow
                  key={transaction.transaction_id}
                  icon={TempImage}
                  transactionType={transaction.transaction_type}
                  date={transaction.timestamp.toString()}
                  amount={`+R${transaction.amount.toFixed(2)}`}
                />
              ))
            ) : (
              <p>No transactions to display</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
