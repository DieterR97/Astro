import React, { useEffect, useState } from "react";
import {
  Banner,
  AssetComponent,
  AssetRow,
} from "./Components/OverviewComponents";
import styles from "./Overview.module.scss";
import FilterIcon from "../../assets/icons/FilterIcon.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import TempImage from "../../assets/login/logo.png";
import { Account, User } from "../../Models/models";

const Overview: React.FC = () => {
  const [account, setAccount] = useState<Account | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
  }, []);

  console.log(account);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.overview}>
      <Banner user={user} />
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
              account.assets.$values.map((asset) => (
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

      <div className={styles.assetTableContainer}>
        <div className={styles["titles"]}>{/* Asset Table Headers */}</div>
        <div className={styles["divider"]}></div>
        <div className={styles["rows"]}>
          {account && Array.isArray(account.assets.$values) ? (
            account.assets.$values.map((asset) => (
              <AssetRow
                key={asset.asset_id}
                image={TempImage}
                name={asset.name}
                price={`R${asset.price.toFixed(2)}`}
                balance={`R${(asset.price * asset.amount).toFixed(2)}`}
                proportion={`${(
                  ((asset.price * asset.amount) / account.balance) *
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
    </div>
  );
};

export default Overview;
