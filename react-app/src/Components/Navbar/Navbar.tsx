import React from "react";
import styles from "./NavbarStyle.module.scss"; // Unchanged
import HomeIcon from "../../assets/icons/HomeIcon.svg";
import CurrencyIcon from "../../assets/icons/CurrencyIcon.svg";
import StackIcon from "../../assets/icons/StackIcon.svg";
import AdminIcon from "../../assets/icons/AdminIcon.svg";
import MoreIcon from "../../assets/icons/MoreIcon.svg";
import Logo from "../../assets/login/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navigation}>
        <div className={styles.frame}  >
          <img className={styles.group} alt="Group" src={Logo} />
          <div className={styles["text-wrapper"]}>Astro</div>
        </div>
        <div className={styles.vector}></div>
        <div>
          <div className={styles["text-wrapper-2"]}>MAIN</div>
        </div>
        <div className={styles.tab} onClick={() => navigate("/overview")}>
          <img className={styles.img} alt="Frame" src={HomeIcon} />
          <div
            className={`${styles["text-wrapper-tab"]} ${isActive("/overview") ? styles.active : ""}`}
          >
            Overview
          </div>
        </div>
        <div className={styles.tab} onClick={() => navigate("/purchasing")}>
          <img className={styles.img} alt="Frame" src={CurrencyIcon} />
          <div
            className={`${styles["text-wrapper-tab"]} ${isActive("/purchasing") ? styles.active : ""}`}
          >
            Purchasing
          </div>
        </div>
        <div className={styles.tab} onClick={() => navigate("/transactions")}>
          <img className={styles.img} alt="Frame" src={StackIcon} />
          <div
            className={`${styles["text-wrapper-tab"]} ${isActive("/transactions") ? styles.active : ""}`}
          >
            Transactions
          </div>
        </div>
        <div className={styles.tab} onClick={() => navigate("/admin")}>
          <img className={styles.img} alt="Frame" src={AdminIcon} />
          <div
            className={`${styles["text-wrapper-tab"]} ${isActive("/admin") ? styles.active : ""}`}
          >
            Admin
          </div>
        </div>
      </div>
      <div className={styles["user-info"]}>
        <div className={styles.vector}></div>
        <div className={styles["frame-2"]}>
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

export default Navbar;
