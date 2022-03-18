import React from "react";
import styles from "../../styles/WeightIcon.module.scss";

const WeightIcon = ({ size, active }) => {
  const circleStyles = {
    backgroundColor: active ? "#fff" : "#000",
  };

  const containerStyles = {
    backgroundColor: active ? "#ee6b25" : "#fff",
  };

  if (size === "small") {
    return (
      <div className={styles.container} style={containerStyles}>
        <div className={styles.box}>
          <div className={styles.row}>
            <span className={styles.circle} style={circleStyles}></span>
          </div>
          <div className={styles.row}>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium") {
    return (
      <div className={styles.container} style={containerStyles}>
        <div className={styles.box}>
          <div className={styles.row}>
            <span className={styles.circle} style={circleStyles}></span>
          </div>
          <div className={styles.row}>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
          </div>
          <div className={styles.row}>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
          </div>
        </div>
      </div>
    );
  }
  if (size === "large") {
    return (
      <div className={styles.container} style={containerStyles}>
        <div className={styles.box}>
          <div className={styles.row}>
            <span className={styles.circle} style={circleStyles}></span>
          </div>
          <div className={styles.row}>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
          </div>
          <div className={styles.row}>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
          </div>
          <div className={styles.row}>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
            <span className={styles.circle} style={circleStyles}></span>
          </div>
        </div>
      </div>
    );
  }
};

export default WeightIcon;
