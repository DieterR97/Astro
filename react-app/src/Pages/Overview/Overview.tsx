import React from "react";
import { Banner } from "./Components/OverviewComponents";
import { Asset} from "./Components/OverviewComponents";
import styles from "./Overview.module.scss";
import FilterIcon from "../../assets/icons/FilterIcon.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <Banner />
      <div className={styles["text-title"]}>Overview</div>

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
            <p className={styles.filterOptionText}>7 Days</p>
          </div>
          <div className={styles.filterOption04}>
            <p className={styles.filterOptionText}>24 Hours</p>
          </div>
        </div>

        {/* <div className={styles.secondaryFilterCon}>
         
          <button className={styles.filterButton}>
            <img src={FilterIcon} alt="filter" />
            Filter
          </button>
          
          <div className={styles.searchFieldCon}>
            <img src={SearchIcon} alt="searchIcon" />
            <input
              className={styles.filterSearchInput}
              type="text"
              placeholder="Search"
            />
          </div>
        </div> */}
      </div>

      {/* Stats */}
      <div className={styles.statsContainer}>
        <div className={styles.portfolio}>
          <div className={styles["title"]}>Portfolio</div>
          <div className={styles["value"]}>R123,456.00</div>
          <div className={styles.graph}>GRAPH</div>
        </div>

        <div className={styles.assets}>
          <div className={styles["title"]}>Top Assets</div>
          <div className={styles.assetsList}>
            <Asset />
            <Asset />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
