import React from "react";
import styles from "./navbarStyle.module.scss"; // Unchanged
import HomeIcon from "../../assets/icons/HomeIcon.svg";
import CurrencyIcon from "../../assets/icons/CurrencyIcon.svg";
import StackIcon from "../../assets/icons/StackIcon.svg";
import AdminIcon from "../../assets/icons/AdminIcon.svg";
import MoreIcon from "../../assets/icons/MoreIcon.svg";
import Logo from "../../assets/login/logo.png";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.div}>
        {" "}
        <div className={styles.frame}>
          {" "}
          <img className={styles.group} alt="Group" src={Logo} />
          <div className={styles["text-wrapper"]}>Astro</div>
        </div>
        <img className={styles.vector} alt="Vector" />
        <div className={styles.tab}>
          <div className={styles["text-wrapper-2"]}>MAIN</div>
        </div>
        <div className={styles["tab-2"]}>
          <img className={styles.img} alt="Frame" src={HomeIcon} />
          <div className={styles["text-wrapper-3"]}>Overview</div>
        </div>
        <div className={styles.tab}>
          <img className={styles.img} alt="Frame" src={CurrencyIcon} />
          <div className={styles["text-wrapper-4"]}>Trade</div>
        </div>
        <div className={styles.tab}>
          <img className={styles.img} alt="Frame" src={StackIcon} />
          <div className={styles["text-wrapper-4"]}>Transactions</div>
        </div>
        <div className={styles.tab}>
          <img className={styles.img} alt="Frame" src={AdminIcon} />
          <div className={styles["text-wrapper-4"]}>Admin</div>
        </div>
      </div>
      <div className={styles["user-info"]}>
        {" "}
        <img
          className={styles["vector-2"]}
          alt="Vector"
          src="vector-20-2.svg"
        />
        <div className={styles["frame-2"]}>
          {" "}
          <div className={styles.ellipse} />
          <div className={styles["group-2"]}>
            <div className={styles["text-wrapper-5"]}>Name Surname</div>
            <div className={styles["text-wrapper-6"]}>
              namesurname@gmail.com
            </div>
          </div>
          <img className={styles["frame-3"]} alt="Frame" src={MoreIcon} />
        </div>
      </div>
    </div>
  );
};
