import React from "react";
import styles from "../styles/StatBlock.module.scss";

const StatBlock = ({ stats }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Stats</p>
      <div className={styles.box}>
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.name}>
            <div className={styles.bar}>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 15 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 14 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 13 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 12 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 11 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 10 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 9 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 8 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 7 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 6 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 5 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 4 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 3 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 2 && styles.filled
                }`}
              ></div>
              <div
                className={`${styles.stat_bar} ${
                  stat.value >= 1 && styles.filled
                }`}
              ></div>
            </div>
            <div className={styles.stat_name}>
              <p>{stat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatBlock;
