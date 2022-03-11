import React from "react";
import Router from "next/router";
import styles from "../styles/PokemonNav.module.scss";

const PokemonNav = ({ num }) => {
  const prev = num === 1 ? 898 : num - 1;
  const next = num === 898 ? 1 : num + 1;
  return (
    <div className={styles.container}>
      <div
        className={`${styles.wing} ${styles.left}`}
        onClick={() => Router.push(`/${prev}`)}
      >
        <div className={styles.content}>
          <div className={styles.arrow_box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <h3>
            {prev < 10 ? `#00${prev}` : prev < 100 ? `#0${prev}` : `#${prev}`}
          </h3>
        </div>
      </div>
      <div
        className={`${styles.wing} ${styles.right}`}
        onClick={() => Router.push(`/${next}`)}
      >
        <div className={styles.content}>
          <h3>
            {next < 10 ? `#00${next}` : next < 100 ? `#0${next}` : `#${next}`}
          </h3>
          <div className={styles.arrow_box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonNav;
