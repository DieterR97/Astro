import React from "react";
import styles from "./OverviewComponents.module.scss";
import ShipIcon from "../../../assets/icons/ShipIcon.svg";
import StatsIcon from "../../../assets/icons/StatsIcon.svg";
import StackIcon from "../../../assets/icons/StackIcon.svg";
import LevelIcon from "../../../assets/icons/LevelIcon.svg";
import MoreIcon from "../../../assets/icons/MoreIcon.svg";
import { User } from "../../../Models/models";

interface BannerProps {
  user: User | null;
}

export const Banner: React.FC<BannerProps> = ({ user }) => {
  return (
    <div className={styles.banner}>
      <div className={styles["text-wrapper-1"]}>Welcome back, {user?.username}</div>

      <div className={styles.frameContainer}>
        <Frame
          title="Current Level"
          content={user?.account.status.status_name || "Not Yet"}
          description={`Criteria: ${user?.account.status.transactions_criteria} transactions`}
          icon={ShipIcon}
        />
        <Frame
          title="Interest Rate"
          content={`${user?.account.status.annual_interest_rate}%`}
          description={`Next -> ${user?.account.status.annual_interest_rate? + 1 : 0}%`}
          icon={StatsIcon}
        />
        <Frame
          title="Transaction Fee"
          content={`${user?.account.status.transaction_fee} Coins`}
          description="Per Transaction"
          icon={StackIcon}
        />
        <Frame
          title="Next Upgrade"
          content="Not Yet"
          description={`Need ${user?.account.status.total_amount_criteria? - user.account.balance : 0} more Coins`}
          icon={LevelIcon}
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
};

export const Frame = ({ title, content, description, icon }: FrameProps) => {
  return (
    <div className={styles.frame}>
      <div className={styles["div"]}>
        <div className={styles["text-wrapper"]}>{title}</div>
        <img className={styles.img} alt="Frame" src={icon} />
      </div>
      <div className={styles["text-wrapper-2"]}>{content}</div>
      <div className={styles["text-wrapper-3"]}>{description}</div>
      <div className={styles.vector} />
    </div>
  );
};

export const AssetComponent = () => {
  return (
    <div className={styles.asset}>
      <div className={styles["image"]} />
      <div className={styles["content"]}>
        <div className={styles["name"]}>COIN (CWN)</div>
        <div className={styles["amount"]}>R2324.23</div>
        <div className={styles["change"]}>+2.3%</div>
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
