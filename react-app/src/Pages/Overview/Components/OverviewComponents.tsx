import React from "react";
import styles from "./OverviewComponents.module.scss";
import ShipIcon from "../../../assets/icons/ShipIcon.svg";
import StatsIcon from "../../../assets/icons/StatsIcon.svg";
import StackIcon from "../../../assets/icons/StackIcon.svg";
import LevelIcon from "../../../assets/icons/LevelIcon.svg";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles["text-wrapper-1"]}>Welcome back, Name</div>

      <div className={styles.frameContainer}>
        <Frame
          title="Current Level"
          content="12"
          description="Cosmic Explorer"
          icon={ShipIcon}
        />
        <Frame
          title="Interest Rate"
          content="1%"
          description="Next -> 2%"
          icon={StatsIcon}
        />
        <Frame
          title="Transaction Fee"
          content="5 Coins"
          description="Per Transaction"
          icon={StackIcon}
        />
        <Frame
          title="Next Upgrade"
          content="Not Yet"
          description="CNeed 15 more Coins"
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

export const Asset = () => {
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
