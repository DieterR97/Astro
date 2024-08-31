import React from "react";
import styles from "./OverviewComponents.module.scss";
import ShipIcon from "../../../assets/icons/ShipIcon.svg";
import StatsIcon from "../../../assets/icons/StatsIcon.svg";
import StackIcon from "../../../assets/icons/StackIcon.svg";
import LevelIcon from "../../../assets/icons/LevelIcon.svg";
import MoreIcon from "../../../assets/icons/MoreIcon.svg";
import { User, Status, Asset, Astro } from "../../../Models/models";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';


interface BannerProps {
  user: User;
  statuses: Status[];
  onUpgrade: (newStatusId: number) => void; 
}

export const Banner: React.FC<BannerProps> = ({
  user,
  statuses,
  onUpgrade,
}) => {
  const currentAccountStatus = statuses.find(
    (status) => status.status_id === user.account.account_status_id
  );
  const nextStatus = statuses.find(
    (status) => status.status_id === user.account.account_status_id + 1
  );

  const transactionsTo = user.account.transactionsFrom.$values ?? [];
  const transactionsFrom = user.account.transactionsTo.$values ?? [];

  const totalTransactions = transactionsTo.length + transactionsFrom.length;
  const totalAmount = user.account.balance;

  const canUpgrade =
    nextStatus &&
    (totalTransactions >= nextStatus.transactions_criteria ||
      totalAmount >= nextStatus.total_amount_criteria);

  return (
    <div className={styles.banner}>
      <div className={styles["text-wrapper-1"]}>
        Welcome back, {user.username}
      </div>

      <div className={styles.frameContainer}>
        <Frame
          title="Current Level"
          content={currentAccountStatus?.status_name || "Unknown"}
          description={`Criteria: ${currentAccountStatus?.transactions_criteria} transactions or R${currentAccountStatus?.total_amount_criteria.toFixed(2)}`}
          icon={ShipIcon}
        />
        <Frame
          title="Interest Rate"
          content={`${
            (currentAccountStatus?.annual_interest_rate || 0) * 100
          }%`}
          description={`Next -> ${
            (nextStatus?.annual_interest_rate || 0) * 100
          }%`}
          icon={StatsIcon}
        />
        <Frame
          title="Transaction Fee"
          content={`${currentAccountStatus?.transaction_fee} Coins`}
          description="Per Transaction"
          icon={StackIcon}
        />
        <Frame
          title="Next Upgrade"
          content={canUpgrade ? "Available" : "Not Yet"}
          description={
            canUpgrade
              ? `Click to upgrade to ${nextStatus?.status_name}`
              : `Need ${Math.max(
                  nextStatus!.transactions_criteria - totalTransactions || 0,
                  0
                )} more transactions or R${Math.max(
                  nextStatus!.total_amount_criteria - totalAmount || 0,
                  0
                ).toFixed(2)} more`
          }
          icon={LevelIcon}
          onClick={() =>
            canUpgrade && nextStatus ? onUpgrade(nextStatus.status_id) : null
          }
          className={canUpgrade ? styles.upgradeAvailable : ""}
        />
      </div>
    </div>
  );
};

type FrameProps = {
  title: string;
  content: string;
  description: string;
  icon: string;
  onClick?: () => void;
  className?: string;
};

export const Frame = ({
  title,
  content,
  description,
  icon,
  onClick,
  className,
}: FrameProps) => {
  return (
    <div className={styles.frame}>
      <div className={styles["div"]}>
        <div className={styles["text-wrapper"]}>{title}</div>
        <img className={styles.img} alt="Frame" src={icon} />
      </div>
      <div className={styles["text-wrapper-2"]} onClick={onClick}>
        {content}
      </div>
      <div className={styles["text-wrapper-3"]}>{description}</div>
      <div
        className={`${styles.vector} ${className ? styles.greenVector : ""}`}
      />
    </div>
  );
};

type AssetComponentProps = {
  name: string;
  abbreviation: string;
  price: number;
  tokens: number;
  astro_price?: number;
};

export const AssetComponent = ({
  name,
  abbreviation,
  price,
  tokens,
  astro_price,
}: AssetComponentProps) => {
  return (
    <div className={styles.asset}>
      <div className={styles["image"]} />
      <div className={styles["content"]}>
        <div className={styles["name"]}>
          {name} ({abbreviation})
        </div>
        <div className={styles["amount"]}>R{tokens * price}</div>
        <div className={styles["change"]}>R{price}</div>
      </div>
      <div className={styles["button"]}>
        <div className={styles["details"]}>View Details</div>
      </div>
    </div>
  );
};

type AssetRowProps = {
  image: string;
  name: string;
  price: string;
  balance: string;
  proportion: string;
  abbreviation: string;
};

export const AssetRow = ({
  image,
  name,
  price,
  balance,
  proportion,
  abbreviation,
}: AssetRowProps) => {
  return (
    <div className={styles.assetRow}>
      <div className={styles["imageContainer"]}>
        <img className={styles["image"]} src={image} alt="" />
        <div className={styles["nameContainer"]}>
          <div className={styles["name"]}> {name}</div>
          <div className={styles["abreviation"]}> {abbreviation}</div>
        </div>
      </div>

      <div className={styles["price"]}> {price}</div>
      <div className={styles["balance"]}> {balance}</div>
      <div className={styles["proportion-container"]}>
        <div className={styles["proportion-bar"]}></div>
        <div className={styles["proportion"]}> {proportion}</div>
      </div>
      <img className={styles["vector"]} src={MoreIcon} alt=""></img>
    </div>
  );
};

type TransactionRowProps = {
  icon: string;
  transactionType: string;
  date: string;
  amount: string;
  isFromTransaction?: boolean;
};

export const TransactionRow: React.FC<TransactionRowProps> = ({
  icon,
  transactionType,
  date,
  amount,
  isFromTransaction,
}) => {
  return (
    <div className={styles.transactionRow}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={icon} alt="Transaction Icon" />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.transactionType}>{transactionType}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.amount} style={{ color: isFromTransaction ? '#0b9457' : '#fc684e' }}>
        R{amount}
      </div>
    </div>
  );
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface AssetChartProps {
  astro: Astro[];
}

export const AssetChart: React.FC<AssetChartProps> = ({ astro }) => {
  const combinedAssets = [
    ...astro.map(a => ({ name: a.name, tokens: a.tokens })),
  ];

  const data = {
    labels: combinedAssets.map(item => item.name),
    datasets: [
      {
        label: 'Amount Owned',
        data: combinedAssets.map(item => item.tokens),
        backgroundColor: "#7E4AC0",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: true,
        color: 'white', 
      },
      tooltip: {
        bodyColor: 'white', 
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', 
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <Bar data={data} options={options} />
    </div>
  );
};